# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fakenames = [
    'Boyd Updike',
    'Yolonda Gottschalk',
    'Monnie Augustin',
    'Louis Early',
    'Bradly Dimas', 
    'Darrick Wages', 
    'Armandina Nazario',
    'Soledad Brinkman',
    'Pauline Harbert',
    'Kimi Bigelow',
    'Mozella Gauvin',
    'Deedra Trepanier',
    'Jackelyn Knighton',
    'Nedra Manzi',
    'Ona Vineyard',
    'Edythe Salomon',
    'Karl Getty',
    'Takako Maclin',
    'Suzan Tinajero',
    'Katia Gable'
]

1.upto(10) do |i|
    name = fakenames[i].split(' ')
    User.create(
        :username              => "user#{i}",
        :password              => "pass#{i}",
        :password_confirmation => "pass#{i}",
        :firstname             => name[0],
        :lastname              => name[1])
 end