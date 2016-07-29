class Move < ActiveRecord::Base
  validates :name, :description, :attack, :special, presence: true

  belongs_to :type

  has_many :move_pokemons
  has_many :pokemon, through: :move_pokemons
end
