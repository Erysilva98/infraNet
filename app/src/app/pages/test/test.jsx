const ServicoCard = ({ img_path, titulo, subtitulo, descricao }) => {
  const descricaoMin = descricao.length > 20 ? `${descricao.substring(0, 20)}...` : descricao;

  return (
    <div className='flex flex-col max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center'>
      <div className='flex justify-center mt-2'>
        <Image src={`${assets}${img_path}`} alt='servico' width={100} height={100} className='mt-2 w-44 h-22 object-cover rounded-t-lg' />
      </div>
      <div className='p-3 flex-grow'>
        <p className='text-gray-700 text-sm'>{descricaoMin}</p>
      </div>
    </div>
  );
};