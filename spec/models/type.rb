require 'rails_helper'
require 'spec_helper'

describe Type do
  describe "creation" do
    it "should be valid" do
      physical_type = FactoryGirl.build(:physical)

      physical_type.should be_valid
    end
  end
end
