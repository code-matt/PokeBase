class Type < ActiveRecord::Base
  validates :name, presence: true

  has_many :pokemon, through: :pokemon_types
end
