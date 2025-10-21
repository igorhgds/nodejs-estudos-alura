import { autor } from '../models/Autor.js';

class AutorController {

   static async listarAutores (req, res) {
      try {
         const listaAutores = await autor.find({});
         res.status(200).json(listaAutores)
      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha ao listar autores.` });
      }
   };

   static async buscarAutorPorId (req, res) {
      try {
         const id = req.params.id;
         const autorEncontado = await autor.findById(id);
         res.status(200).json(autorEncontado);
      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha ao buscar autor por ID.` });
      }
   };

   static async cadastrarAutor (req, res) {
      try {
         const novoAutor = await autor.create(req.body)
         res.status(201).json({ message: 'Criado com sucesso', Autor: novoAutor });
      }catch (error){
         res.status(500).json({ message: `${error.message} - falha ao cadastrar autor.` });
      }
   };

   static async atualizarAutor (req, res) {
      try {
         const id = req.params.id;
         await autor.findByIdAndUpdate(id, req.body);
         res.status(200).json({ message: 'Autor atualizado com sucesso' });
      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha ao atualizar autor.` });
      }
   };

   static async deletarAutor (req, res) {
      try {
         await autor.findByIdAndDelete(req.params.id);
         res.status(204).json({ message: 'Autor deletado com sucesso' });
      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha ao deletar autor.` });         
      }
   }
}

export default AutorController;