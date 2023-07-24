"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const promptsPerPage = 10;

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  const totalPages = Math.ceil((searchText ? searchedResults.length : allPosts.length) / promptsPerPage);
  const indexOfLastPrompt = currentPage * promptsPerPage;
  const indexOfFirstPrompt = indexOfLastPrompt - promptsPerPage;
  const currentPrompts = (searchText ? searchedResults : allPosts).slice(indexOfFirstPrompt, indexOfLastPrompt);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Pesquisar por tag ou usuário'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* Tag Menu */}
      <div className="flex justify-center space-x-4 my-4 flex-wrap">
        {predefinedTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className='text-white hover:text-blue-500 transition'
          >
            {tag}
          </button>
        ))}
      </div>

      {/* All Prompts */}
      <PromptCardList data={currentPrompts} handleTagClick={handleTagClick} />

      {/* Pagination */}
      <div className="pagination flex justify-center items-center space-x-4 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
        >
          &larr; Anterior
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Próxima &rarr;
        </button>
      </div>
    </section>
  );
};

const predefinedTags = [
  "microsaas",
  "saas",
  "software",
  "startup",
  "assinatura",
  "produtividade",
  "automação",
  "análise",
  "faturamento",
  "empreendedor",
  "ideia",
  "marketing",
  "UI/UX",
  "SEO",
];

export default Feed;