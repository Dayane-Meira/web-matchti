from flask import Flask
from flask import jsonify, request
from pymysql import cursors
from config import mysql

app = Flask(__name__)

@app.route('/healthcheck')
def index():
    return jsonify({'Status': 'OK'})

@app.route('/profissionais', methods=['GET'])
def professionals():
    try:
        conn = mysql.connect()
        cursor = conn.cursor(cursors.DictCursor)
        cursor.execute("SELECT * FROM tbl_profissional")
        profs = cursor.fetchall()
        if not profs:
            message = {
                'status' : 404,
                'Message' : "Sem profissionais cadastrados!"
            }
            return jsonify(message), 404
        response = jsonify(profs)
        response.status_code = 200
        return response
    except Exception as e:
        return jsonify({'Error':f'{e}'})
    finally:
        cursor.close()
        conn.close()


@app.route("/profissional/<int:id>", methods=['GET'])
def professional_by_id(id):
    try:
        conn = mysql.connect()
        cursor = conn.cursor(cursors.DictCursor)
        cursor.execute("SELECT * FROM tbl_profissional WHERE id=%s", id)
        profs = cursor.fetchone()
        if not profs:
            message = {
                'status' : 404,
                'Message' : "Sem profissionais cadastrados!"
            }
            return jsonify(message), 404
        response = jsonify(profs)
        response.status_code = 200
        return response
    except Exception as e:
        return jsonify({'Error':f'{e}'})
    finally:
        cursor.close()
        conn.close()


@app.route("/profissional/adicionar", methods=['POST'])
def create_professional():
    try:
        nome = request.form['nome']
        nascimento = request.form['nascimento']
        email = request.form['email']
        telefone = request.form['telefone']
        celular = request.form['celular']
        rg = request.form['rg']
        cpf = request.form['cpf']
        area = request.form['area']
        descricao = request.form['descricao']
        if nome and nascimento and email and celular and rg and cpf and area and descricao and request.method == 'POST':
            data = (nome, nascimento, email, telefone, celular, rg, cpf, area, descricao)
            conn = mysql.connect()
            cursor = conn.cursor(cursors.DictCursor)
            cursor.execute("INSERT INTO tbl_profissional VALUES (default, %s, %s, %s, %s, %s, %s, %s, %s, %s)", data)
            conn.commit()
            message = {
                'status': 200,
                'Mensagem': 'Profissional adicionado com sucesso'
            }
            response = jsonify(message)
            response.status_code = 200
            return response
        else:
            return not_found()
    except Exception as e:
        return jsonify({'Error':f'{e}'})
    finally:
        cursor.close()
        conn.close()
    
@app.route("/profissional/atualizar", methods=['PUT'])
def update_professional():
    try:
        nome = request.form['nome']
        nascimento = request.form['nascimento']
        email = request.form['email']
        telefone = request.form['telefone']
        celular = request.form['celular']
        rg = request.form['rg']
        cpf = request.form['cpf']
        area = request.form['area']
        descricao = request.form['descricao']
        if nome and nascimento and email and celular and rg and cpf and area and descricao and request.method == 'PUT':
            data = (nome, nascimento, email, telefone, celular, rg, area, descricao, cpf)
            conn = mysql.connect()
            cursor = conn.cursor(cursors.DictCursor)
            cursor.execute("UPDATE tbl_profissional SET nome=%s, nascimento=%s, email=%s, telefone=%s, celular=%s, rg=%s, area=%s, descricao=%s WHERE cpf=%s", data)
            conn.commit()
            message = {
                'status': 200,
                'Mensagem': 'Profissional atualizado com sucesso'
            }
            response = jsonify(message)
            response.status_code = 200
            return response
        else:
            return not_found()
    except Exception as e:
        return jsonify({'Error': f'{e}'})

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'Mensage': 'Not Found ' + request.url
    }
    response = jsonify(message)
    response.status_code = 404
    return response

if __name__ == "__main__":
    app.run(debug=True, port=5000)