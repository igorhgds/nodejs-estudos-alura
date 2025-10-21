import livro from '../models/Livro.js';

class LivroController {

   static async listarLivros (req, res) {
      try {
         const listaLivros = await livro.find({});
         res.status(200).json(listaLivros)
      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha ao listar livros.` });
      }
   };

   static async buscarLivroPorId (req, res) {
      try {
         const id = req.params.id;
         const livroEncontado = await livro.findById(id);
         res.status(200).json(livroEncontado);
      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha ao buscar livro por ID.` });
      }
   };

   static async cadastrarLivro (req, res) {
      try {
         const novoLivro = await livro.create(req.body)
         res.status(201).json({ message: 'Criado com sucesso', livro: novoLivro });
      }catch (error){
         res.status(500).json({ message: `${error.message} - falha ao cadastrar livro.` });
      }
   };

   static async atualizarLivro (req, res) {
      try {
         const id = req.params.id;
         await livro.findByIdAndUpdate(id, req.body);
         res.status(200).json({ message: 'Livro atualizado com sucesso' });
      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha ao atualizar livro.` });
      }
   };

   static async deletarLivro (req, res) {
      try {
         await livro.findByIdAndDelete(req.params.id);
         res.status(204).json({ message: 'Livro deletado com sucesso' });
      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha ao deletar livro.` });         
      }
   }
}

export default LivroController;