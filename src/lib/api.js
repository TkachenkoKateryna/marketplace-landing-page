const FIREBASE_DOMAIN = "https://photon-279006-default-rtdb.firebaseio.com";

export async function getProducts() {
  const response = await fetch(`${FIREBASE_DOMAIN}/products.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  const transformedProducts = [];

  for (const key in data) {
    const productObj = {
      id: key,
      ...data[key],
    };

    transformedProducts.push(productObj);
  }

  return transformedProducts;
}

export async function addProduct(productData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/products.json`, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create product.");
  }

  return null;
}
