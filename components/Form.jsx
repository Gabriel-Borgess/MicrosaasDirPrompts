import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Prompt</span>
      </h1>
      <p className='desc text-left max-w-md'>
        Crie e compartilhe os seus melhores prompts voltadas para o universo MicroSAAS, e deixe sua imaginação correr solta em nossa plataforma.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism p-5 bg-white/20 border border-gray-200 rounded-xl shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-white'>
            Seu Prompt de IA
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Escreva seu prompt aqui...'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-white'>
            Adicione uma tag{" "}
            <span className='font-normal'>(#microsaas, #desenvolvimento, #idea, etc.)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex justify-end items-center gap-4'>
          <Link href='/' className='text-white text-sm'>
            Cancelar
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='black_btn'
          >
            {submitting ? `Enviando...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
