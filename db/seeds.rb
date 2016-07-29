# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

type = Type.create(name: "Physical")

move = Move.create(
  name: "Quick Attack",
  attack: 33,
  description: "Some attack",
  special: true,
  type: type
)

squirtle  = Pokemon.create(
  name: "Squirtle",
  stamina: 10,
  attack: 25,
  defence: 25,
  description: "this is the description",
  image: "asdf",
  poke_id: 3
)

join = MovePokemon.create(pokemon_id: squirtle.id, move_id: move.id)

join2 = PokemonType.create(pokemon_id: squirtle.id, type_id: type.id)
