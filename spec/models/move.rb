require 'rails_helper'
require 'spec_helper'

describe Move do
  describe "creation" do
    it "should be valid" do
      quick_attack = FactoryGirl.build(:quick_attack)
      quick_attack.should be_valid
    end
    it "has a physical type" do
      quick_attack = FactoryGirl.build(:quick_attack)
      quick_attack.type.name.should eq("Physical")
    end
  end
end
