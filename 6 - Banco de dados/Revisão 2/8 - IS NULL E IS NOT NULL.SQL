## NULL e IS NOT NULL
# IS NULL 
# SELECIONAR COM 'CAMPO = NULL' NÃO FUNCIONA
SELECT * FROM clientes WHERE telefone IS NULL;

# IS NOT NULL
SELECT * FROM clientes WHERE telefone IS NOT NULL;