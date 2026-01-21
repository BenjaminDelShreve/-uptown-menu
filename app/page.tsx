import type React from "react"
import { Badge } from "@/components/ui/badge"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2c2c2c]">
      {/* Header */}
      <header className="bg-[#1a1a1a] text-white py-8 text-center">
        <h1 className="text-5xl tracking-wider">
          <span className="font-black text-[#d4a574]">EAT</span>
          <span className="mx-2 font-normal">•</span>
          <span className="font-light text-[#d4a574]">DRINK</span>
        </h1>
      </header>

      {/* Main Menu Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* BURGERS Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#d4a574] text-black">BURGERS</h2>
              <p className="text-sm mb-6 text-gray-600">
                Fresh, all-beef, hand-formed patties served with Uptown fries or tots. "Load" your spuds{" "}
                <strong>+3</strong> • Substitute Side Salad, Zippin' Brussels Sprouts, or Fried Pickles{" "}
                <strong>+3</strong> • Substitute chicken breast, plant-based chicken, or veggie patty upon request.
              </p>

              <BurgerItem
                name="the classic*"
                price={14}
                description={
                  <>
                    Lettuce, tomato, pickle, onion, mayo. Choice of American or Cheddar Cheese. Add Bacon{" "}
                    <strong>+2</strong>
                  </>
                }
              />

              <BurgerItem
                name="blues burger*"
                price={16}
                description="Sharp bleu cheese crumbles, thick-cut bacon, and our kickin' aioli. Lettuce, tomato, pickle, onion included"
              />

              <BurgerItem
                name="shroommaster*"
                price={14}
                description="Sautéed mushrooms with Swiss cheese and garlic aioli"
              />

              <BurgerItem
                name="inferno*"
                price={15}
                description="Roasted poblanos and thinly sliced jalapeños with pepper jack cheese and our signature kickin' aioli. Lettuce, tomato, pickle, onion included"
              />

              <BurgerItem
                name="sunrise*"
                price={16}
                description="Sunny-side up egg, thick-cut bacon, smashed tots, cheddar, and mayo. Lettuce, tomato, pickle, onion included"
              />
            </section>

            {/* MAINS Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#d4a574]">MAINS</h2>

              <MenuItem
                name="grilled pilsner chicken"
                price={14}
                description="Juicy pilsner-marinated grilled chicken topped with caramelized onions, roasted poblano peppers, and melted pepper jack cheese, drizzled with honey mustard. Includes your choice of side"
              />

              <MenuItem
                name="session salmon"
                price={18}
                description="Grilled Atlantic salmon glazed with a honey-lime chili sauce, served over a bed of fluffy couscous with a side of roasted Brussels sprouts"
              />

              <MenuItem
                name="fried chicken + waffles"
                price={15}
                description="Our twist on a southern staple. Served with a sunny-side up egg, honey butter, and syrup. For a different twist, try it with French toast!"
              />

              <MenuItem
                name="fish + chips"
                price={16}
                description="Beer-battered cod accompanied by sweet slaw, scratch-made tartar sauce, and fries"
              />

              <MenuItem
                name="skillet mac"
                price={12}
                description="Cavatappi pasta tossed with housemade spicy cheese sauce, topped with Parmesan cheese and green onions"
              />
            </section>

            {/* GREENS Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#d4a574]">GREENS</h2>

              <MenuItem
                name="kale lemon salad"
                price={12}
                description="Chopped kale tossed with spiced chickpeas, shaved Parmesan, and lemon vinaigrette"
                hasHalfSize
              />

              <MenuItem
                name="spinach cranberry apple pecan salad"
                price={13}
                description="Fresh baby spinach tossed with crisp apples, dried cranberries, candied pecans, and balsamic vinaigrette"
              />

              <MenuItem
                name="caesar salad"
                price={12}
                description="Crisp romaine tossed in our homemade Caesar dressing, topped with shaved Parmesan and croutons"
                hasHalfSize
              />

              <MenuItem
                name="cobb salad"
                price={14}
                description="A bed of romaine with fresh avocado, thick-cut bacon, bleu cheese, grape tomatoes, and hard-boiled egg with your choice of dressing (see other side for options)"
                hasHalfSize
              />

              <div className="mt-4 p-3 bg-[#e8e3d8] rounded text-xs space-y-1">
                <p>
                  Add Smoked Turkey <strong>+4</strong>
                </p>
                <p>
                  Add Salmon <strong>+4</strong>
                </p>
                <p>
                  Add Chicken <strong>+3</strong>
                </p>
                <p>
                  Add Thick-Cut Bacon <strong>+1</strong>
                </p>
                <p>
                  Add BBQ Carnitas <strong>+2</strong>
                </p>
                <p>
                  Add Uptown Chili <strong>+2</strong>
                </p>
              </div>
            </section>

            {/* Kids & Sides */}
            <section>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#d4a574]">
                for the kids <span className="text-2xl">$6</span>
              </h2>
              <p className="text-sm mb-4 text-gray-600">
                Served with a side and a drink. Must be 12 or under — for friends over the age of 12, we will charge an
                extra <strong>$3</strong>
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm mb-8">
                <div>CHEESE QUESADILLA</div>
                <div>MINI BURGER</div>
                <div>GRILLED CHEESE</div>
                <div>HOT DOG</div>
                <div>CHICKEN TENDERS</div>
                <div>MAC & CHEESE</div>
              </div>

              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#d4a574]">
                sides <span className="text-2xl">$5</span>
              </h2>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>SWEET SLAW</div>
                <div>FRIES • TOTS</div>
                <div>HONEY-GLAZED BABY CARROTS</div>
                <div>SIDE SALAD</div>
                <div>FRIED SPINACH</div>
                <div>CUCUMBER TOMATO SALAD</div>
                <div>ZIPPIN' BRUSSELS SPROUTS</div>
                <div>MAC & CHEESE</div>
              </div>
            </section>

            {/* BITES Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#d4a574]">BITES</h2>

              <MenuItem
                name="hummus"
                price={13}
                description="Scratch-made hummus with hints of garlic, topped with spiced chickpeas and served with an assortment of fresh veggies and warm naan bread"
                isVegetarian
              />

              <MenuItem
                name="carnitas queso"
                price={12}
                description="Housemade spicy queso topped with tender pork and garnished with pico de gallo. Choice of naan or corn tortilla chips"
                isVegetarian
              />

              <MenuItem
                name="buffalo chicken dip"
                price={13}
                description="A union of tender chicken, buffalo sauce, cream cheese, cheddar, and mozzarella. Garnished with Parmesan and green onions and served with warm naan bread"
                isVegetarian
              />

              <MenuItem
                name="zippin' brussels sprouts"
                price={10}
                description="Crispy fried Brussels Sprouts tossed with lemon vinaigrette and finished with bacon, cotija cheese, and Sweety Drop peppers"
              />

              <MenuItem
                name="pretzels"
                price={12}
                description="Two baked pretzels served with our savory beer cheese sauce and honey mustard"
                isVegetarian
              />

              <MenuItem
                name="smoked pork sliders"
                price={14}
                description="Two sliders featuring tender, slow-smoked pork butt paired with our tangy yet subtly spicy BBQ sauce, sautéed onions, and melted cheddar cheese. Topped with a pickle for the perfect crunch"
                isVegetarian
              />

              <MenuItem
                name="fried pickles"
                price={9}
                description="Hand-dipped fried dill pickle chips served with ranch dressing"
              />

              <MenuItem
                name="the wings"
                price={14}
                description="Eight jumbo wings cooked to perfection and tossed in your choice of sauce. Served with carrots, celery, and your choice of ranch or bleu cheese"
              />

              <div className="mb-6">
                <h3 className="font-bold text-lg text-[#d4a574] mb-2">beer tenders</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Made-to-order crispy beer battered chicken strips served with your choice of sauce. Served with
                  carrots, celery, and your choice of ranch or bleu cheese
                </p>
                <div className="flex gap-4 text-sm">
                  <span>
                    4 Tenders <span className="ml-2 font-semibold">10</span>
                  </span>
                  <span>
                    8 Tenders <span className="ml-2 font-semibold">17</span>
                  </span>
                </div>
              </div>

              <MenuItem
                name="razor rolls"
                price={13}
                description='Carnitas, bacon, cream cheese, jalapenos, cheddar-wrapped, fried, served with "top secret" Sooie sauce. While supplies last!'
              />

              <MenuItem
                name="brat sliders"
                price={14}
                description="Two grilled bratwurst sliders topped with tangy sauerkraut, melted Swiss cheese, and honey mustard, served on toasted buns"
              />

              <div className="mt-6 p-4 bg-[#e8e3d8] rounded text-xs space-y-2">
                <p>
                  <strong>SAUCES:</strong> Buffalo, BBQ, Korean BBQ, Honey Sriracha, Garlic Parmesan, and Dreaded Death{" "}
                  <strong>+1</strong>
                </p>
                <p>
                  <strong>DRESSINGS:</strong> Ranch, Bleu Cheese, Honey Mustard, Balsamic Vinaigrette, Lemon
                  Vinaigrette, Spicy Ranch, 1000 Island, Kickin' Aioli, Garlic Aioli, and Caesar
                </p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* HANDHELDS Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#d4a574]">HANDHELDS</h2>
              <p className="text-sm mb-6 text-gray-600">
                Served with your choice of fries or tots
                <br />
                Substitute Side Salad, Zippin' Brussels Sprouts, or Fried Pickles <strong>+3</strong>
              </p>

              <MenuItem
                name="blt"
                price={14}
                description="A pile of thick-cut bacon with romaine lettuce, fresh tomatoes, and garlic aioli on toasted sourdough bread"
                isVegetarian
              />

              <MenuItem
                name="brewben"
                price={16}
                description="Lean-shaved corned beef, Pilsner sauerkraut, Swiss cheese, and Thousand Island dressing served on toasted, thick-cut marble rye"
                isVegetarian
              />

              <MenuItem
                name="craft-fried chicken sandwich"
                price={16}
                description={
                  <>
                    Beer-battered chicken breast sandwich with sweet slaw, buffalo sauce (or Dreaded Death{" "}
                    <strong>+1</strong>), and dill chips topped with pepper jack cheese and served on a brioche bun
                  </>
                }
              />

              <MenuItem
                name="philly cheesesteak"
                price={14}
                description="Thinly sliced, juicy sirloin steak with sautéed onions and red peppers, smothered with pepper jack cheese and served on a hoagie roll"
                isVegetarian
              />

              <MenuItem
                name="chicken avocado club"
                price={17}
                description="This pub's favorite is stacked high with thick-cut bacon, chicken, avocado, lettuce, tomato, and garlic aioli on sourdough bread"
                isVegetarian
              />

              <MenuItem
                name="chili dog"
                price={16}
                description="Footlong dog smothered in hearty chili, topped with melted cheddar cheese, diced red onions, and sliced jalapeños"
                isVegetarian
              />

              <MenuItem
                name="southwest turkey wrap"
                price={14}
                description="Sliced turkey, guacamole, pico de gallo, lettuce, and our spicy kickin' aioli wrapped in a flour tortilla"
              />

              <MenuItem
                name="mediterranean wrap"
                price={14}
                description="Scratch-made hummus, spiced chickpeas, romaine lettuce, cherry tomatoes, cucumber, and lemon vinaigrette wrapped in a flour tortilla"
                isVegetarian
              />

              <MenuItem
                name="chicken philly"
                price={14}
                description="Marinated grilled chicken, bacon, swiss, sautéed onions, mayo, hot pepper relish. Plant-based option available"
              />

              <MenuItem
                name="smoked + fried turkey club"
                price={17}
                description="Smoked then fried turkey, bacon, lettuce, tomato, and garlic aioli stacked on sourdough"
              />
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-6 mt-12">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-xs text-center mb-4">
            *These items may be served raw or undercooked. The consumption of raw or undercooked meats, seafood,
            poultry, or eggs may increase your risk of foodborne illness, especially if you have certain medical
            conditions.
          </p>
          <p className="text-xs text-center">
            Please inform your server of any allergies you may have. Gluten-friendly menu available upon request.
          </p>
        </div>
        <div className="text-center mt-6">
          <h2 className="text-4xl font-bold tracking-wider">
            <span className="text-[#d4a574]">ICE COLD</span>
          </h2>
        </div>
      </footer>

      {/* Legend */}
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex gap-6 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
            🌱
          </Badge>
          <span>VEGETARIAN ITEM</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
            ½
          </Badge>
          <span>HALF-SIZE OPTION</span>
        </div>
      </div>
    </div>
  )
}

interface MenuItemProps {
  name: string
  price: number
  description: string | React.ReactNode
  isVegetarian?: boolean
  hasHalfSize?: boolean
}

function MenuItem({ name, price, description, isVegetarian, hasHalfSize }: MenuItemProps) {
  return (
    <div className="mb-6">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 flex-1">
          <h3 className="font-bold text-lg text-[#d4a574]">{name}</h3>
          {isVegetarian && (
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-xs">
              🌱
            </Badge>
          )}
          {hasHalfSize && (
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300 text-xs">
              ½
            </Badge>
          )}
        </div>
        <span className="font-bold text-lg whitespace-nowrap">{price}</span>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  )
}

interface BurgerItemProps {
  name: string
  price: number
  description: string | React.ReactNode
}

function BurgerItem({ name, price, description }: BurgerItemProps) {
  return (
    <div className="mb-6">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-lg text-[#d4a574]">{name}</h3>
        <span className="font-bold text-lg whitespace-nowrap">{price}</span>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  )
}
