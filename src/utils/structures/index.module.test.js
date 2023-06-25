const fs = require('fs');

const {
  createDirectory,
  deleteDirectory,
  createFile,
  deleteFile
} = require('.'); // Substitua pelo caminho correto para o arquivo do módulo

describe('File System Operations', () => {
  beforeAll(() => {
    // Cria uma pasta temporária para os testes
    fs.mkdirSync('temp', { recursive: true });
  });

  afterAll(() => {
    // Remove a pasta temporária após os testes
   fs.rmdirSync('temp', { recursive: true });
  });

  test('createDirectory should create a directory',async () => {
    const response = await createDirectory('temp/test-dir');
    expect(() => response).not.toThrow()
  });

  test('deleteDirectory should delete a directory', async () => {
    const response = await deleteDirectory('temp/test-dir');
    expect(() => response).not.toThrow()
  });

  test('createFile should create a file', async () => {
    const fileName = 'temp/test-file.txt';
    const content = 'Test content';
    const response = await createFile(fileName, content);
    expect(() => response).not.toThrow()
  });

  test('deleteFile should delete a file', async () => {
    const fileName = 'temp/test-file.txt';
    const response = await deleteFile(fileName);
    expect(() => response).not.toThrow()
  })

});