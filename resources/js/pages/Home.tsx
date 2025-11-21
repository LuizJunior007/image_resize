import Layout from "@/components/Layout";
import { Head, useForm } from "@inertiajs/react";
import Card from 'react-bootstrap/Card';

export default function Home(){

    const { data, setData, post, errors } = useForm({
        imagem: null,
        largura: '',
        altura: ''
    });

    const handleEnviarImagem = (e:any) => {

        setData('imagem', e);
        
    }

    const handleRedimensionar = (e:any) => {

        e.preventDefault();

        post('/redimensionarImg', {

            forceFormData: true,

            onSuccess: () => {

                setData({
                    imagem: null,
                    largura: '',
                    altura: ''
                });
                window.location.href = '/download-imagem';
            }
        })

    }

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

                <form onSubmit={(e) => handleRedimensionar(e)} encType="multipart/form-data">
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="imagem">Faça upload da imagem</label>
                            <input 
                                type="file" 
                                id="imagem" 
                                className={`form-control mt-2 ${errors.imagem && 'is-invalid'}`}
                                onChange={(e) => handleEnviarImagem(e.target.files && e.target.files[0])}
                                accept="image/*" 
                            />
                            {errors.imagem && <div className="text-danger p-1">{errors.imagem}</div>}
                        </div>

                        <div className="col-lg-6 mt-3 mt-lg-0">
                            <label htmlFor="largura">Dimensões</label>
                            <div className="row mt-2">
                                <div className="col-lg-6">
                                    <input 
                                        type="number" 
                                        id="largura" 
                                        className={`form-control ${errors.largura && 'is-invalid'}`} 
                                        value={data.largura} 
                                        onChange={(e) => setData('largura', e.target.value)} 
                                        placeholder="Largura" min={1} 
                                    />
                                    {errors.largura && <div className="text-danger p-1">{errors.largura}</div>}
                                </div>

                                <div className="col-lg-6 mt-3 mt-lg-0">
                                    <input 
                                        type="number" 
                                        id="altura" 
                                        className={`form-control ${errors.altura && 'is-invalid'}`} 
                                        value={data.altura}
                                        onChange={(e) => setData('altura', e.target.value)} 
                                        placeholder="Altura" min={1} 
                                    />
                                    {errors.altura && <div className="text-danger p-1">{errors.altura}</div>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary">
                            Redimensionar
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
                                <Card.Title>2 - Dimensões</Card.Title>
                                <Card.Text>
                                    Escolha a largura e altura que desejar.
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
                                <Card.Title>3 - Redimensionar</Card.Title>
                                <Card.Text>
                                    Clique no botão Redimensionar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );

}

Home.layout = (page:any) => <Layout children={page} />
