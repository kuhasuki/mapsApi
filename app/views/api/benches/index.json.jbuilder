# json.extract! @benches do |bench|
#   json.extract! bench, :description, :lat, :lon
# end

json.benches @benches do |bench|
  json.extract! bench, :description, :lat, :lon
end
