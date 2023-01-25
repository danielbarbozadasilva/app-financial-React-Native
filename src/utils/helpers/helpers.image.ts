import {API_URL_IMAGE} from '@env';
const url = API_URL_IMAGE

export function renderImg(image: string) {  
  return image.replace('localhost', url);
}
