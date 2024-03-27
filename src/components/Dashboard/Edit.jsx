import React, { useEffect, useState } from 'react';
import Create from './Create';
import { idPost } from 'api/posts';
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await idPost(id);
        setName(res.data.title);
        setDescription(res.data.description);
        setCategory(res.data.category.id);
        setImage(res.data.image);
      } catch (error) {
        console.error('Err:', error);
      }
    };

    fetchPost();
  }, [id]);
  return !name ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Create
        title={name}
        description={description}
        image={image}
        category={category}
        id={id}
      />
    </div>
  );
}

export default Edit;
