class CreateMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :moves do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :attack, null: false
      t.boolean :special, null: false
      t.belongs_to :type, index: true

      t.timestamps
    end
  end
end
