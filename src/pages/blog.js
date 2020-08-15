import React from 'react';

import Layout from '../components/layout';

import styles from '../components/blog.module.css';

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1> This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, et maxime error laudantium explicabo quae nisi quo. Dicta id ratione temporibus tempore rem nam voluptatum quisquam vel nihil? Sint corporis, quas adipisci mollitia tempore, doloribus rerum quisquam soluta esse iusto possimus libero nemo debitis nihil dignissimos, placeat voluptas optio rem similique! Architecto corporis nihil culpa odit rem obcaecati itaque saepe exercitationem minima dolor libero aut sed illum iusto quod, tenetur repellat nostrum id nisi deleniti! Laudantium est voluptate modi, facere voluptates quidem cum impedit sequi doloribus, libero, quae odio! Neque officia explicabo exercitationem voluptas omnis dolorum tenetur repellat provident adipisci?
        </p>
      </div>
    </Layout>
  );
};

export default blog;
