import React from 'react';

interface IBookDetailPageProps {
  params: Promise<{
    Id: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const filePath = path.join(process.cwd(), 'public', 'booksData.json');
  const fileContents = await readFile(filePath, 'utf8');
  return JSON.parse(fileContents) as IBook[];
};
const BookDetailPage = async ({params}: IBookDetailPageProps) => {
    const { Id } = await params;
    console.log(Id , "Id");
    return (
        <div>
            Book Detail Page
        </div>
    );
};

export default BookDetailPage;