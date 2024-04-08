const beforeProductPricing = `public class ProductPricing {
  public double calculatePrice(double basePrice) {
    return basePrice * 1.2; // Menambahkan markup sebesar 20%
  }
}`

const beforeProductAvailability = `public class ProductAvailability {
  public boolean checkAvailability(int productId) {
    // Logika untuk mengecek ketersediaan produk
    return true;
  }
}`

const beforeProductDescription = `public class ProductDescription {
  public String getProductDescription(int productId) {
    // Logika untuk mengecek deskripsi produk
    return "Product Description";
  }
}`

const beforeClient = `public class Client {
  public static void main(String[] args) {
      int productId = 123;
      
      ProductPricing pricing = new ProductPricing();
      ProductAvailability availability = new ProductAvailability();
      ProductDescription description = new ProductDescription();
      
      double price = pricing.calculatePrice(100);
      boolean isAvailable = availability.checkAvailability(productId);
      String productDescription = description.getProductDescription(productId);
      
      // Business logic lainnya
  }
}`

const afterProduct = `public class Product {
  private int productId;
  private double basePrice;
  private String description;
  private boolean available;
  
  public Product(int productId, double basePrice, String description, boolean available) {
    this.productId = productId;
    this.basePrice = basePrice;
    this.description = description;
    this.available = available;
  }
  
  public double calculatePrice() {
    return basePrice * 1.2; // Menambahkan markup sebesar 20%
  }
  
  public boolean checkAvailability() {
    // Logika untuk mengecek ketersediaan produk
    return true;
  }
  
  public String getProductDescription() {
    // Logika untuk mengecek deskripsi produk
    return description;
  }
  
  // Setters dan getters lainnya
}`

const afterClient = `public class Client {
  public static void main(String[] args) {
    int idProduk = 123;
    
    Product produk = new Product(idProduk, 100, "Deskripsi Produk", true);
    
    double harga = produk.hitungHarga();
    boolean tersedia = produk.cekKetersediaan();
    String deskripsiProduk = produk.getDeskripsiProduk();
    
    // Business logic lainnya
  }
}`

const shotgunSurgeryBefore = [
  {
    id: 1,
    class: 'ProductPricing',
    code: beforeProductPricing
  },
  {
    id: 2,
    class: 'ProductAvailability',
    code: beforeProductAvailability
  },
  {
    id: 3,
    class: 'ProductDescription',
    code: beforeProductDescription
  },
  {
    id: 4,
    class: 'Client',
    code: beforeClient
  },
]

const shotgunSurgeryAfter = [
  {
    id: 1,
    class: 'Product',
    code: afterProduct
  },
  {
    id: 2,
    class: 'Client',
    code: afterClient
  }
]

export { shotgunSurgeryBefore, shotgunSurgeryAfter }