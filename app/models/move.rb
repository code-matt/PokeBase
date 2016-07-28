class Move < ActiveRecord::Base
  validates :name, :description, :attack, :special, presence: true

  belongs_to :type
  has_many :pokemon, through: :pokemon_attacks
end
