import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductShowcase.module.scss';
import Button from '../../../../components/ui/Button/Button';
import { products, relatedProducts } from '../../../../data/products';
import { useCart } from '../../../../contexts/CartContext';
import { CURRENCY } from '../../../../utils/constants';

const ProductShowcase = () => {
  const { addToCart } = useCart();
  const mainProduct = products[0]; // Medident Sensitive Care

  const handleAddToCart = () => {
    if (mainProduct && mainProduct.variants && mainProduct.variants[0]) {
      const product = {
        id: mainProduct.id,
        name: mainProduct.name,
        category: mainProduct.category,
        image: mainProduct.images.main
      };
      const variant = {
        size: mainProduct.variants[0].size,
        price: mainProduct.variants[0].price,
        originalPrice: mainProduct.originalPrice,
        discount: mainProduct.discount ? `${mainProduct.discount}%` : undefined
      };
      addToCart(product, variant, 1);
    }
  };

  if (!mainProduct) {
    return null;
  }

  return (
    <section id="products" className={styles.productShowcase}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <p className={styles.sectionSubtitle}>
            Advanced dental care solutions for sensitive teeth
          </p>
        </div>
        
        <div className={styles.productCard}>
          <div className={styles.productImageSection}>
            <img 
              src={mainProduct.images.hero} 
              alt={mainProduct.name}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            <h3>{mainProduct.name}</h3>
            <p className={styles.productDescription}>
              {mainProduct.description}
            </p>
            <ul className={styles.productBenefits}>
              {mainProduct.benefits.map((benefit, index) => (
                <li key={index}>
                  <i className={benefit.icon} aria-hidden="true"></i>
                  {benefit.text}
                </li>
              ))}
            </ul>
            <div className={styles.productPrice}>
              <span className={styles.currentPrice}>
                {CURRENCY}{mainProduct.price}
              </span>
              {mainProduct.originalPrice && (
                <>
                  <span className={styles.originalPrice}>
                    {CURRENCY}{mainProduct.originalPrice}
                  </span>
                  <span className={styles.discount}>
                    Save {mainProduct.discount}%
                  </span>
                </>
              )}
            </div>
            <div className={styles.productActions}>
              <Button 
                variant="primary" 
                size="large"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Link to="/products/medident-sensitive-care">
                <Button variant="secondary" size="large">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Products */}
        <div className={styles.additionalProducts}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Complete Your Oral Care</h3>
            <p className={styles.sectionSubtitle}>
              Enhance your dental health routine with our complete product range
            </p>
          </div>
          
          <div className={styles.productsGrid}>
            {relatedProducts.map((product) => (
              <div key={product.id} className={styles.additionalProduct}>
                <img 
                  src={product.image} 
                  alt={product.name}
                />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className={styles.price}>
                  {CURRENCY}{product.price}
                </div>
                <Button variant="primary">
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;