class Hashtag < ActiveRecord::Base
  attr_accessible :name #none, this is basically a listing we make of hashtags

  validates :name, presence: true
 # validates :criteria, presence: true

  has_many :messagehashtags
  has_many :userhashtags
end
