require 'csv'
require 'json'
require 'pry'

def seed_all_the_things!
  # CSV.foreach("#{Rails.root}/db/pokemon_data.csv") do |pokemon|
  #   Pokemon.create(
  #     poke_id: pokemon[0],
  #     name: pokemon[1],
  #     stamina: pokemon[4],
  #     attack: pokemon[5],
  #     defence: pokemon[6],
  #     description: "placeholder for description",
  #     image: "placeholder for image"
  #   )
  # end
  file = File.read('GAME_MASTER_v0_1.decoded.categorized.json')
  data = JSON.parse(file)
  pokemon = scan_pokemons(data)
  moves = scan_moves(data)
  types = scan_types(data)
  binding.pry
end

def scan_pokemons(data)
{

}

seed_all_the_things!
