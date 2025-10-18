import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import styles from './ProductShowcase.module.scss';

interface ProductVariant {
  size: string;
  price: number;
  originalPrice: number;
  discount: string;
}

interface ProductData {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: Array<{ icon: string; text: string }>;
  price: number;
  originalPrice: number;
  discount: string;
  size: string;
  image: string;
  badge: string;
  badgeType: string;
}

interface ProductShowcaseProps {
  products: ProductData[];
  productVariants: Record<string, ProductVariant[]>;
  onImageClick: (productType: string, imageIndex: number) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  productVariants,
  onImageClick
}) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleQuickAddToCart = (productType: string) => {
    const productInfo = products.find(p => p.id === productType);
    if (!productInfo) return;

    const variant = productVariants[productType]?.[0];
    if (!variant) return;

    const product = {
      id: productInfo.id,
      name: productInfo.name,
      category: productInfo.category,
      image: productInfo.image
    };

    addToCart(product, variant, 1);
    navigate('/cart');
  };

  return (
    <section id="products" className={styles.productShowcase}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Complete Oral Care Range</h2>
          <p className={styles.sectionSubtitle}>Choose the perfect solution for your oral health needs</p>
        </div>
        
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div key={product.id} className={styles.productCard} id={product.id}>
              <div className={styles.productBadge}>
                <span className={`${styles.badge} ${styles[product.badgeType]}`}>
                  {product.badge}
                </span>
              </div>
              <div 
                className={styles.productImage} 
                onClick={() => onImageClick(product.id, index * 3)}
              >
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productCategory}>{product.category}</div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <ul className={styles.productBenefits}>
                  {product.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>
                      <i className={benefit.icon}></i> {benefit.text}
                    </li>
                  ))}
                </ul>
                
                <div className={styles.productPriceSummary}>
                  <div className={styles.price}>৳{product.price}</div>
                  <div className={styles.priceInfo}>
                    <span className={styles.originalPrice}>was ৳{product.originalPrice}</span>
                    <span className={styles.savings}>Save {product.discount}</span>
                  </div>
                  <div className={styles.sizeInfo}>{product.size}</div>
                </div>
                <div className={styles.productActions}>
                  <button 
                    className="btn btn-primary btn-full" 
                    onClick={() => handleQuickAddToCart(product.id)}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    Quick Add to Cart
                  </button>
                  <button 
                    className="btn btn-secondary btn-outline" 
                    onClick={() => navigate(`/product-details/${product.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.productComparison} id="compare">
          <h3>Not sure which product is right for you?</h3>
          <div className={styles.comparisonOptions}>
            <button className="btn btn-secondary">
              <i className="fas fa-balance-scale"></i>
              Compare Products
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-search"></i>
              Take Product Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;