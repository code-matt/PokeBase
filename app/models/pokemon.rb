class Pokemon < ActiveRecord::Base
  validates :name, :stamina, :attack, :defence, :image, :description, presence: true

  has_many :pokemon_types
  has_many :types, through: :pokemon_types

  has_many :move_pokemons
  has_many :moves, through: :move_pokemons
end
