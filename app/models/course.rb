class Course < ApplicationRecord
  has_many :enrollements
  has_many :users, through: :enrollements
end
