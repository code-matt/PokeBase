class Api::V1::PokemonsController < ActionController::Base
  def index
    render json: Pokemon.all
  end
end
