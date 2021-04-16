const BASE_URL = 'https://mate-api.herokuapp.com';

export const getUserPosts = async(userId) => {
  const response = +userId === 0
    ? await fetch(`${BASE_URL}/posts`)
    : await fetch(`${BASE_URL}/posts?userID=${userId}`);

  const posts = await response.json();

  return posts.data;
};