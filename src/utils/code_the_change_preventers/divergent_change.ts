const beforeItem = `public class Item {
  private List<Cart> items;
  private double totalPrice;

  public Item() {
    items = new ArrayList<>();
    totalPrice = 0.0;
  }

  public void addItem(Cart item) {
    items.add(item);
    totalPrice += item.getPrice();
  }

  public void removeItem(Cart item) {
    items.remove(item);
    totalPrice -= item.getPrice();
  }

  public void checkout() {
    // Checkout logic
  }
}`

const beforeCart = `public class Cart {
  private String name;
  private double price;

  public Cart(String name, double price) {
    this.name = name;
    this.price = price;
  }
  // Setters getters
}`

const afterItem = `public class Item {
  private List<Cart> items;

  public Item() {
    items = new ArrayList<>();
  }

  public void addItem(Cart item) {
    items.add(item);
  }

  public void removeItem(Cart item) {
    items.remove(item);
  }

  public double calculateTotalPrice() {
    double totalPrice = 0.0;
    for (Cart item : items) {
      totalPrice += item.getPrice();
    }
    return totalPrice;
  }

  public void checkout() {
    double totalPrice = calculateTotalPrice();
    // Checkout logic
  }
}`


const afterCart = `public class Cart {
  private String name;
  private double price;

  public Cart(String name, double price) {
    this.name = name;
    this.price = price;
  }
  // Setter getter
}`

const divergentChangeBefore = [
  {
    id: 1,
    class: 'Item',
    code: beforeItem
  },
  {
    id: 2,
    class: 'Cart',
    code: beforeCart
  },
]

const divergentChangeAfter = [
  {
    id: 1,
    class: 'Item',
    code: afterItem
  },
  {
    id: 2,
    class: 'Cart',
    code: afterCart
  },
]

export { divergentChangeBefore, divergentChangeAfter }