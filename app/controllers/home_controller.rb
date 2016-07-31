class HomeController < ApplicationController
  def page_not_found
  end

  def index
  end

  def data
    respond_to { |format| format.json { render json: [1,2,3,4,5] } }
  end

  def show
    if request.accept =~ /json/
      head :forbidden
      return
    end
  end
end
