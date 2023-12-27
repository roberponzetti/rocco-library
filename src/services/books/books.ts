import axios from 'axios';

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface ListPrice {
  amount: number;
  currencyCode: string;
}

interface SaleInfo {
  country: string;
  saleability: string;
  listPrice: ListPrice;
}

interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors: string[];
  description: string;
  categories: string[];
  imageLinks: ImageLinks;
}

interface BookData {
  id: string;
  saleInfo: SaleInfo;
  volumeInfo: VolumeInfo;
}

const apiKey = process.env.PUBLIC_GOOGLE_BOOKS_API_KEY;

export const getBooksBySearch = async (searchParam: string): Promise<BookData[]> => {
  try{
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchParam}&projection=lite&maxResults=20&key=${apiKey}`);

    return response.data.items.map((item: BookData) => ({
      id: item.id,
      saleInfo: item.saleInfo,
      volumeInfo: {
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        categories: item.volumeInfo.categories,
        imageLinks: item.volumeInfo.imageLinks
      },
    }));
  } catch (error) {
    console.log("Error al hacer la llamada GET", error)
    throw error;
  }
};