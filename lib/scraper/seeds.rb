require 'csv'
require_relative 'pokemon_getter'

CSV.open('pokemon_data.csv', 'w') {}

PokemonGetter.scraper

pokemon_name_list = []
CSV.foreach("pokemon_data.csv") { |row| pokemon_name_list << row }
# pokemon_name_list.map! { |pokemon| pokemon[0] }
# BLACKLIST = [].map!(&:freeze).freeze

# pokemon_name_list -= BLACKLIST
# PokemonScraper.scrape(pokemon_name_list)

# CSV.foreach("pokemon_info.csv") do |row|
#   new_pokemon = Pokemon.new(first_name: row[0], last_name: row[1])
#   new_pokemon.political_party = row[2]
#   if new_politician.save
#     puts "Successfully added #{row[0]}"
#   else
#     puts "Could not save #{row[0]} to the database."
#   end
# end

# CSV.open('politician_names.csv', 'w') {}
# CSV.open('politician_info.csv', 'w') {}
