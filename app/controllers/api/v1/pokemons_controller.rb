class Api::V1::PokemonsController < ActionController::Base
  VALID_QUERIES = ['name','attack','stamina','defence','type']

  def index
    unless validate_queries(request.GET.keys)
      render json: {error: "Bad Query"}
      return
    end

    render json: build_result(request)
  end

  def build_result(request)

    result = Pokemon.all
    request.GET.each do |query,value|
      value = sanitize_value(value)
      i += 1
      case query
        when "name"
          result = result.where("name ILIKE ?","%#{value}%")
        when "attack"
          result = result.where("attack >= ?","#{value}")
        when "defence"
          result = result.where("defence >= ?","#{value}")
        when "stamina"
          result = result.where("stamina >= ?","#{value}")
        when "type"
          result = result.where("type ILIKE ?","%#{value}%")
      end
    end
    result
  end

  def sanitize_value(value)
    value.parameterize
  end

  def validate_queries(queries)
    queries.each do |query|
      return false unless VALID_QUERIES.include?(query)
    end
    true
  end
end
