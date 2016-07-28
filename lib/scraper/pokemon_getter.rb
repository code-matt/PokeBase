class PokemonGetter
  require 'nokogiri'
  require 'open-uri'
  require 'csv'
  require 'pry'

  def self.scrape_pokemon_data
    url = "https://pokemondb.net/spinoff/go/pokedex"
    parsed_page = Nokogiri::HTML(open(url))
    links = parsed_page.css("a.ent-name")
    types = parsed_page.css("td.cell-icon")
    stats = parsed_page.css("td.num")

    move_links = parsed_page.css("a")
    all_move_links = []

    move_links.each do |link|
      puts link.attributes['href'].value
      url = link.attributes['href'].value
      url_array = url.split('/')
      all_move_links << url_array[2] if url_array[1] == 'move'
    end
    all_move_links.compact!.uniq!

    all_info = []

    links.each_with_index do |link, index|
      puts link.attributes['href'].value
      url = link.attributes['href'].value
      pokemon_name = url.split('/')[2]
      pokemon_types = []
      types[index].children.each do |type|
        pokemon_types << type.text unless type.text == ""
      end

      all_info << {
        number: index + 1,
        name: pokemon_name.capitalize,
        main_type: pokemon_types[0],
        secondary_type: pokemon_types[1],
        stamina: stats[index * 7 + 1],
        attack: stats[index * 7 + 2],
        defense: stats[index * 7 + 3],
        capture_rate: stats[index * 7 + 4],
        flee_rate: stats[index * 7 + 5],
        candy: stats[index * 7 + 6]
      }
    end

    all_info
  end

  def self.scraper
    counter = 0
    puts "Opening: https://pokemondb.net/pokedex/"

    puts "Scraping pokemon links"
    pokemon_links = PokemonGetter.scrape_pokemon_data
    puts "Stashing #{pokemon_links.length} links into array"

    pokemon_links.each do |stuff|
      CSV.open("pokemon_data.csv", "ab") do |csv|
        row = [stuff[:number], stuff[:name], stuff[:main_type]]
        row += [stuff[:secondary_type]] unless stuff[:secondary_type].nil?
        row += [stuff[:stamina], stuff[:attack], stuff[:defense]]
        row += [stuff[:capture_rate], stuff[:flee_rate], stuff[:candy]]
        csv << row
        counter += 1
      end
    end
    pokemon_links.clear
    puts "pokemon_data.csv saved with #{counter} lines"
  end
end
