class Pokemon < ActiveRecord::Base
  validates :name, :stamina, :attack, :defence, :image, :description, presence: true

  has_many :types, through: :pokemon_type
  has_many :attacks, through: :pokemon_attacks
end
