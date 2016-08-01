class Api::V1::PokemonsController < ActionController::Base
  VALID_QUERIES = ['name','attack','stamina','defence','min_trainer_level','type']

  def index
    unless validate_queries(request.GET.keys)
      render json: {error: "Bad Query"}
      return
    end

    #still need to sanitize this and also
    #change name to LIKE instead of ==
    render json: Pokemon.where(build_result(request))
  end

  def build_result(request)
    query_str = ""
    i = 0
    request.GET.each do |query,value|
      i += 1
      case query
        when "name"
          query_str += "name = '#{value}'"
        when "attack"
          query_str += "attack > #{value}"
        when "defence"
          query_str += "defence > #{value}"
      end
      query_str += " AND " unless i == request.GET.keys.length
    end
    query_str
  end

  def validate_queries(queries)
    queries.each do |query|
      return false unless VALID_QUERIES.include?(query)
    end
    true
  end
end
