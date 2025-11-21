import Layout from "@/components/Layout";
import { Head, useForm } from "@inertiajs/react";
import Card from 'react-bootstrap/Card';

export default function Converter(){

    const { data, setData, errors, post } = useForm({
        imagem: null,
        formato: ''
    });

    return(
        <>

            <Head>
                <title>Home</title>
                <meta name="description" content="Content aqui..." />
            </Head>
            
            <section>
                <div className="mb-5 text-center">
                    <h2 className="m-0">Formatos aceitos</h2>

                    <div>
                        JPG, PNG, SVG ou GIF. Máx (5mb).
                    </div>
                </div>

                <form encType="multipart/form-data">
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="imagem">Faça upload da imagem</label>
                            <input 
                                type="file" 
                                id="imagem" 
                                className="form-control mt-2" 
                                value={data.imagem ?? ''}
                                
                                accept="image/*" 
                            />
                            
                        </div>

                        <div className="col-lg-6 mt-3 mt-lg-0">
                            <label htmlFor="largura">Formato</label>
                            <div className="row mt-2">
                                <div className="col-lg-6">
                                    <select 
                                        name="formato" 
                                        id="formato" 
                                        className="form-select"
                                        value={data.formato}
                                        onChange={(e) => setData('formato', e.target.value)}
                                    >
                                        <option value="" selected>Selecione</option>
                                        <option value="jpg">JPG</option>
                                        <option value="png">PNG</option>
                                        <option value="svg">SVG</option>
                                        <option value="gif">GIF</option>
                                    </select>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary">
                            Converter
                        </button>
                    </div>
                </form>
            </section>

            <section>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-4">
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <i className="bi bi-cloud-arrow-up fs-1 text-primary"></i>
                                </div>
                                <Card.Title>1 - Upload</Card.Title>
                                <Card.Text>
                                    Faça o upload da imagem.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6 col-lg-4 mt-3 mt-md-0">
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <i className="bi bi-aspect-ratio fs-1 text-primary"></i>
                                </div>
                                <Card.Title>2 - Formato</Card.Title>
                                <Card.Text>
                                    Escolha o formato que desejar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6 col-lg-4 mt-3 mt-lg-0">
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <i className="bi bi-images fs-1 text-primary"></i>
                                </div>
                                <Card.Title>3 - Converter</Card.Title>
                                <Card.Text>
                                    Clique no botão Converter.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>

        </>
    );

}

Converter.layout = (page:any) => <Layout children={page} />