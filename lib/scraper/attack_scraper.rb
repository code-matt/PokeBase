class AttackScraper
  require 'nokogiri'
  require 'open-uri'
  require 'csv'
  require 'pry'

  def scrape_attack_links
    url = "https://pokemondb.net/spinoff/go/pokedex"
    parsed_page = Nokogiri::HTML(open(url))
    links = parsed_page.css("a.ent-name")

    links = parsed_page.css("a")
    move_links = []

    links.each do |link|
      puts link.attributes['href'].value
      directory = link.attributes['href'].value
      arr = directory.split('/')
      move_links << directory if arr[1] == 'move' && arr.length > 1
    end
    move_links.shift
    move_links.compact!
    move_links.uniq!

    all_attacks = []
    move_links.each do |move|
      all_attacks << scrape_attacks(move)
    end
    all_attacks
  end

  def scrape_attacks(move)
    return {} if move == "/move/struggle"
    puts move
    move_hash = Hash.new(0)
    if move != "/move"
      url = "https://pokemondb.net"
      parsed_page = Nokogiri::HTML(open(url + move))
      puts "Scraping #{url + move}"

      move_name = parsed_page.css("h1").first.text.split('(')[0].strip
      move_hash[:name] = move_name

      move_hash[:valid_pokemons] = parse_pokemon_with_attacks(parsed_page.css("div.infocard-list"))
    end
    move_hash
  end

  def parse_pokemon_with_attacks(item)
    pokemons = []
    str_arr = item.css("div.infocard-list").css("span.infocard-data")
    valid_pokemons = []
    str_arr.each_with_index do |str,index|
      poke_id = extract_number(str)
      if poke_id < 151
        valid_pokemons << extract_pokemon_name(str)
      end
    end
    valid_pokemons
  end

  def extract_number(str)
    val = nil
    re1='.*?'	# Non-greedy match on filler
    re2='(\\d+)'	# Integer Number 1

    re=(re1+re2)
    m=Regexp.new(re,Regexp::IGNORECASE);
    if m.match(str)
        int1=m.match(str)[1];
        val = int1
    end
    val.to_i
  end

  def extract_pokemon_name(txt)
    val = nil
    re1='((?:[a-z][a-z]+))'	# Word 1

    re=(re1)
    m=Regexp.new(re,Regexp::IGNORECASE);
    if m.match(txt)
        word1=m.match(txt)[1];
        val = word1
    end
    val
  end

  def self.fill_csv
    puts "Scraping pokemon attack links"
    scraper = AttackScraper.new
    attacks = scraper.scrape_attack_links

    CSV.open('attack_data.csv', 'w') do |csv_object|
      attacks.each do |attack|
        csv_object << [attack]
      end
    end
  end
end

AttackScraper.fill_csv
