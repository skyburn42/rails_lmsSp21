class Course < ApplicationRecord
  has_many :enrollements, dependent: :destroy
  has_many :users, through: :enrollements
end
