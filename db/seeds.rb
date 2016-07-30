require 'csv'
require 'json'
require 'pry'

def seed_all_the_things!
  file = File.read('GAME_MASTER_v0_1.decoded.categorized.json')
  data = JSON.parse(file)
  pokemon = scan_pokemons(data)
  moves = scan_moves(data)
end

def scan_pokemons(data)
{

}

seed_all_the_things!
