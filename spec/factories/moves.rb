FactoryGirl.define do
    factory :quick_attack, class: Move do |m|
      m.name "Quick Attack"
      m.description "The user lunges at the target at a speed that makes it almost invisible. It is sure to strike first."
      m.attack 25
      m.special true
      m.association :type, factory: :physical # expecting this to attach the user_id from factory :user as :primary contact_id in the school model
    end
end
