require 'csv'
require 'json'

def seed_all_the_things!
  file = File.read("#{Rails.root}/db/GAME_MASTER_v0_1.decoded.categorized.json")
  data = JSON.parse(file)
  # scan_types(data)
  scan_moves(data)
  # pokemon = scan_pokemons(data)
end

######Types
def scan_types(data)
  typesarray = data["TypeScalarArray"]
  data["PokemonTypes"].each do |type|
    Type.create(
      poke_type_id: typesarray.find_index(type["TemplateId"]),
      name: type["TemplateId"].split('_')[2].downcase.capitalize,
      attack_scalar: type["TypeEffective"]["AttackScalar"]
    )
  end
end

#######Moves
def scan_moves(data)
  typesarray = data["TypeScalarArray"]

  data["Moves"].each do |move|
    id_and_name = parse_move_uniqueid_info(move["TemplateId"])
    type = Type.where(name: move["Move"]["Type"].split('_')[2].downcase.capitalize)
    byebug
  end

end

def parse_move_uniqueid_info(str)
  poke_move_id = str.split('_').first.delete("V0").to_i
  name = str.split('_')[2..-1].map{ |w| w.downcase.capitalize }.join(' ')
  {name: name, poke_move_id: poke_move_id}
end

######Pokemon

def scan_pokemons(data)
  data["Pokemon"].each do |pokemon|
    id_and_name = parse_pokemon_uniqueid_info(pokemon["Pokemon"]["UniqueId"])
    stats = parse_pokemon_stats_info(pokemon["Pokemon"]["Stats"])
    pokemon_data = id_and_name.merge(stats)

  end
end

def parse_pokemon_uniqueid_info(str)
  poke_ = str.split('_').first.delete("V0")
  name = str.split('_')[2].downcase.capitalize
  {name: name, poke_id: poke_id}
end

def parse_pokemon_stats_info(hash)
  {
    stamina: hash["BaseStamina"],
    attack: hash["BaseAttack"],
    defence: hash["BaseDefense"]
  }
end

###########

seed_all_the_things!
