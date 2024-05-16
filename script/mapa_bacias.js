interuptor = true
interuptor1 = true

var cardAcre = document.getElementById('Card_Acre')
var camadaInferior = document.getElementById('camadaInferior')
//var classBacias = document.querySelector('.cards_bacias')

function mapBacias_ColocaAcre (){
    cardAcre.style.height = '150px'
    cardAcre.style.display = 'block'
}
function mapBacias_tiraAcre(){
    if (interuptor1)
        cardAcre.style.display = 'none'
        interuptor1 = true
}
function SelecionaAcre() {
    if (interuptor) 
        cardAcre.style.display = 'block'
        cardAcre.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeAcre() {
	cardAcre.style.display = 'none';
    cardAcre.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardAlto = document.getElementById('Card_Altotapajos')

function mapBacias_ColocaAltotapajos() {
    cardAlto.style.height = '150px'
    cardAlto.style.display = 'block'
}
function mapBacias_tiraAltotapajos() {
    if (interuptor1)
        cardAlto.style.display = 'none'
        interuptor1 = true
}
function SelecionaAltotapajos() {
    if (interuptor)
        cardAlto.style.display = 'block'
		cardAlto.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeAltotapajos() {
	cardAlto.style.display = 'none';
    cardAlto.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardAlmada = document.getElementById('Card_Almada')

function mapBacias_ColocaAlmada() {
    cardAlmada.style.height = '150px'
    cardAlmada.style.display = 'block'
}
function mapBacias_tiraAlmada() {
    if (interuptor1)
    cardAlmada.style.display = 'none'
    interuptor1 = true
}
function SelecionaAlmada() {
    if (interuptor)
        cardAlmada.style.display = 'block'
        cardAlmada.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeAlmada() {
	cardAlmada.style.display = 'none';
    cardAlmada.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardAmazonas = document.getElementById('Card_Amazonas')

function mapBacias_ColocaAmazonas() {
    cardAmazonas.style.height = '150px'
    cardAmazonas.style.display = 'block'
}
function mapBacias_tiraAmazonas() {
    if (interuptor1)
        cardAmazonas.style.display = 'none'
        interuptor1 = true
}
function SelecionaAmazonas() {
    if (interuptor)
        cardAmazonas.style.display = 'block'
        cardAmazonas.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeAmazonas() {
	cardAmazonas.style.display = 'none';
    cardAmazonas.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardAraripe = document.getElementById('Card_Araripe')

function mapBacias_ColocaAraripe() {
    cardAraripe.style.height = '150px'
    cardAraripe.style.display = 'block'
}
function mapBacias_tiraAraripe() {
    if (interuptor1)
        cardAraripe.style.display = 'none'
        interuptor1 = true
}
function SelecionaAraripe() {
    if (interuptor)
        cardAraripe.style.display = 'block'
        cardAraripe.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeAraripe() {
	cardAraripe.style.display = 'none';
    cardAraripe.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardBananal = document.getElementById('Card_Bananal')

function mapBacias_ColocaBananal() {
    cardBananal.style.height = '150px'
    cardBananal.style.display = 'block'
}
function mapBacias_tiraBananal() {
    if (interuptor1)
        cardBananal.style.display = 'none'
        interuptor1 = true
}
function SelecionaBananal() {
    if (interuptor)
        cardBananal.style.display = 'block'
        cardBananal.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeBananal() {
	cardBananal.style.display = 'none';
    cardBananal.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardBarreirinhas = document.getElementById('Card_Barreirinhas')

function mapBacias_ColocaBarreirinhas() {
    cardBarreirinhas.style.height = '150px'
    cardBarreirinhas.style.display = 'block'
}
function mapBacias_tiraBarreirinhas() {
    if (interuptor1)
        cardBarreirinhas.style.display = 'none'
        interuptor1 = true
}
function SelecionaBarreinhas() {
    if (interuptor)
        cardBarreirinhas.style.display = 'block'
        cardBarreirinhas.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeBarreirinhas() {
	cardBarreirinhas.style.display = 'none';
    cardBarreirinhas.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardBarreirinhasTerra = document.getElementById('Card_Barreirinhas_Terra')

function mapBacias_ColocaBarreirinhasT() {
    cardBarreirinhasTerra.style.height = '150px'
    cardBarreirinhasTerra.style.display = 'block'
}
function mapBacias_tiraBarreirinhasT() {
    if (interuptor1)
        cardBarreirinhasTerra.style.display = 'none'
        interuptor1 = true
}
function SelecionaBarreinhasT() {
    if (interuptor)
        cardBarreirinhasTerra.style.display = 'block'
        cardBarreirinhasTerra.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeBarreirinhasT() {
	cardBarreirinhasTerra.style.display = 'none';
    cardBarreirinhasTerra.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardBraganca = document.getElementById('Card_Braganca_Vizeu')

function mapBacias_ColocaBraganca() {
    cardBraganca.style.height = '150px'
    cardBraganca.style.display = 'block'
}
function mapBacias_tiraBraganca() {
    if (interuptor1)
        cardBraganca.style.display = 'none'
        interuptor1 = true
}
function SelecionaBraganca() {
    if (interuptor)
        cardBraganca.style.display = 'block'
        cardBraganca.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeBraganca() {
	cardBraganca.style.display = 'none';
    cardBraganca.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardCamamu = document.getElementById('Card_Camamu')

function mapBacias_ColocaCamamu() {
    cardCamamu.style.height = '150px'
    cardCamamu.style.display = 'block'
}
function mapBacias_tiraCamamu() {
    if (interuptor1)
        cardCamamu.style.display = 'none'
        interuptor1 = true
}
function SelecionaCamamu() {
    if (interuptor)
        cardCamamu.style.display = 'block'
        cardCamamu.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeCamamu() {
	cardCamamu.style.display = 'none';
    cardCamamu.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardCampos = document.getElementById('Card_Campos')

function mapBacias_ColocaCampos() {
    cardCampos.style.height = '150px'
    cardCampos.style.display = 'block'
}
function mapBacias_tiraCampos() {
    if (interuptor1)
        cardCampos.style.display = 'none'
        interuptor1 = true
}
function SelecionaCampos() {
    if (interuptor) 
        cardCampos.style.display = 'block'
        cardCampos.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeCampos() {
	cardCampos.style.display = 'none';
    cardCampos.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardCamposTerra = document.getElementById('Card_Campos_Terra')

function mapBacias_ColocaCamposT() {
    cardCamposTerra.style.height = '150px'
    cardCamposTerra.style.display = 'block'
}
function mapBacias_tiraCamposT() {
    if (interuptor1)
        cardCamposTerra.style.display = 'none'
        interuptor1 = true
}
function SelecionaCamposT() {
    if (interuptor) 
        cardCamposTerra.style.display = 'block'
        cardCamposTerra.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeCamposT() {
	cardCamposTerra.style.display = 'none';
    cardCamposTerra.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardCumuruxatiba = document.getElementById('Card_Cumuruxatiba')

function mapBacias_ColocaCumuruxatiba() {
    cardCumuruxatiba.style.height = '150px'
    cardCumuruxatiba.style.display = 'block'
}
function mapBacias_tiraCumuruxatiba() {
    if (interuptor1)
        cardCumuruxatiba.style.display = 'none'
        interuptor1 = true
}
function SelecionaCumuruxatiba() {
    if (interuptor)
        cardCumuruxatiba.style.display = 'block'
        cardCumuruxatiba.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeCumuruxatiba() {
	cardCumuruxatiba.style.display = 'none';
    cardCumuruxatiba.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardCeara = document.getElementById('Card_Ceara')

function mapBacias_ColocaCeara() {
    cardCeara.style.height = '150px'
    cardCeara.style.display = 'block'
}
function mapBacias_tiraCeara() {
    if (interuptor1)
        cardCeara.style.display = 'none'
        interuptor1 = true
}
function SelecionaCeara() {
    if (interuptor)
        cardCeara.style.display = 'block'
        cardCeara.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeCeara() {
	cardCeara.style.display = 'none';
    cardCeara.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardEspiritoSanto = document.getElementById('Card_Espirito')

function mapBacias_ColocaEspiritoSanto() {
    cardEspiritoSanto.style.height = '150px'
    cardEspiritoSanto.style.display = 'block'
}
function mapBacias_tiraEspiritoSanto() {
    if (interuptor1)
        cardEspiritoSanto.style.display = 'none'
        interuptor1 = true
}
function SelecionaEspiritoSanto() {
    if (interuptor)
        cardEspiritoSanto.style.display = 'block'
        cardEspiritoSanto.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeEspirito() {
	cardEspiritoSanto.style.display = 'none';
    cardEspiritoSanto.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardEspiritoSantoTerra = document.getElementById('Card_Espírito_Santo_Terra')

function mapBacias_ColocaEspiritoSantoT() {
    cardEspiritoSantoTerra.style.height = '150px'
    cardEspiritoSantoTerra.style.display = 'block'
}
function mapBacias_tiraEspiritoSantoT() {
    if (interuptor1)
        cardEspiritoSantoTerra.style.display = 'none'
        interuptor1 = true
}
function SelecionaEspiritoSantoT() {
    if (interuptor)
        cardEspiritoSantoTerra.style.display = 'block'
        cardEspiritoSantoTerra.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeEspiritoT() {
	cardEspiritoSantoTerra.style.display = 'none';
    cardEspiritoSantoTerra.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardFozAmazonas = document.getElementById('Card_FozAmazonas')

function mapBacias_ColocaFozAmazonas() {
    cardFozAmazonas.style.height = '150px'
    cardFozAmazonas.style.display = 'block'
}
function mapBacias_tiraFozAmazonas() {
    if (interuptor1)
        cardFozAmazonas.style.display = 'none'
        interuptor1 = true
}
function SelecionaFozAmazonas() {
    if (interuptor)
        cardFozAmazonas.style.display = 'block'
        cardFozAmazonas.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeFoz() {
	cardFozAmazonas.style.display = 'none';
    cardFozAmazonas.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardItaborai = document.getElementById('Card_Itaborai')

function mapBacias_ColocaItaborai() {
    cardItaborai.style.height = '150px'
    cardItaborai.style.display = 'block'
}
function mapBacias_tiraItaborai() {
    if (interuptor1)
        cardItaborai.style.display = 'none'
        interuptor1 = true
}
function SelecionaItaborai() {
    if (interuptor)
        cardItaborai.style.display = 'block'
        cardItaborai.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeItaborai() {
	cardItaborai.style.display = 'none';
    cardItaborai.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardJatoba = document.getElementById('Card_Jatoba')

function mapBacias_ColocaJatoba() {
    cardJatoba.style.height = '150px'
    cardJatoba.style.display = 'block'
}
function mapBacias_tiraJatoba() {
    if (interuptor1)
        cardJatoba.style.display = 'none'
        interuptor1 = true
}
function SelecionaJatoba() {
    if (interuptor)
        cardJatoba.style.display = 'block'
        cardJatoba.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeJatoba() {
	cardJatoba.style.display = 'none';
    cardJatoba.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardJequitinhonha = document.getElementById('Card_Jequitinhonha')

function mapBacias_ColocaJequitinhonha() {
    cardJequitinhonha.style.height = '150px'
    cardJequitinhonha.style.display = 'block'
}
function mapBacias_tiraJequitinhonha() {
    if (interuptor1)
        cardJequitinhonha.style.display = 'none'
        interuptor1 = true
}
function SelecionaJequitinhonha() {
    if (interuptor)
        cardJequitinhonha.style.display = 'block'
        cardJequitinhonha.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeJequitinhonha() {
	cardJequitinhonha.style.display = 'none';
    cardJequitinhonha.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardJequitinhonhaTerra = document.getElementById('Card_Jequitinhonha_Terra')

function mapBacias_ColocaJequitinhonhaT() {
    cardJequitinhonhaTerra.style.height = '150px'
    cardJequitinhonhaTerra.style.display = 'block'
}
function mapBacias_tiraJequitinhonhaT() {
    if (interuptor1)
        cardJequitinhonhaTerra.style.display = 'none'
        interuptor1 = true
}
function SelecionaJequitinhonhaT() {
    if (interuptor)
        cardJequitinhonhaTerra.style.display = 'block'
        cardJequitinhonhaTerra.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeJequitinhonhaT() {
	cardJequitinhonhaTerra.style.display = 'none';
    cardJequitinhonhaTerra.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardMarajo = document.getElementById('Card_Marajo')

function mapBacias_ColocaMarajo (){
    cardMarajo.style.height = '150px'
    cardMarajo.style.display = 'block'
}
function mapBacias_tiraMarajo(){
    if (interuptor1){
        cardMarajo.style.display = 'none'
        interuptor1 = true
    }
    }
function SelecionaMarajo() {
    if (interuptor)
        cardMarajo.style.display = 'block'
        cardMarajo.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeMarajo() {
	cardMarajo.style.display = 'none';
    cardMarajo.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardMucuri = document.getElementById('Card_Mucuri')

function mapBacias_ColocaMucuri (){
    cardMucuri.style.height = '150px'
    cardMucuri.style.display = 'block'
}
function mapBacias_tiraMucuri(){
    if (interuptor1)
        cardMucuri.style.display = 'none'
        interuptor1 = true
}
function SelecionaMucuri() {
    if (interuptor)
        cardMucuri.style.display = 'block'
        cardMucuri.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeMucuri() {
	cardMucuri.style.display = 'none';
    cardMucuri.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardPantanal = document.getElementById('Card_Pantanal')

function mapBacias_ColocaPantanal (){
    cardPantanal.style.height = '150px'
    cardPantanal.style.display = 'block'
}
function mapBacias_tiraPantanal(){
    if (interuptor1)
        cardPantanal.style.display = 'none'
        interuptor1 = true
}
function SelecionaPantanal() {
    if (interuptor)
        cardPantanal.style.display = 'block'
        cardPantanal.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondePantanal() {
	cardPantanal.style.display = 'none';
    cardPantanal.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardParaMaranhao = document.getElementById('Card_Para_Maranhao')

function mapBacias_ColocaParaMaranhao (){
    cardParaMaranhao.style.height = '150px'
    cardParaMaranhao.style.display = 'block'
}
function mapBacias_tiraParaMaranhao(){
    if (interuptor1)
        cardParaMaranhao.style.display = 'none'
        interuptor1 = true
}
function SelecionaParaMaranhao() {
    if (interuptor)
        cardParaMaranhao.style.display = 'block'
        cardParaMaranhao.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondePara() {
	cardParaMaranhao.style.display = 'none';
    cardParaMaranhao.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardParana = document.getElementById('Card_Parana')

function mapBacias_ColocaParana (){
    cardParana.style.height = '150px'
    cardParana.style.display = 'block'
}
function mapBacias_tiraParana(){
    if (interuptor1)
        cardParana.style.display = 'none'
        interuptor1 = true
}
function SelecionaParana() {
    if (interuptor)
        cardParana.style.display = 'block'
        cardParana.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeParana() {
	cardParana.style.display = 'none';
    cardParana.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardParecis = document.getElementById('Card_Parecis')

function mapBacias_ColocaParecis (){
    cardParecis.style.height = '150px'
    cardParecis.style.display = 'block'
}
function mapBacias_tiraParecis(){
    if (interuptor1)
        cardParecis.style.display = 'none'
        interuptor1 = true
}
function SelecionaParecis() {
    if (interuptor)
        cardParecis.style.display = 'block'
        cardParecis.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeParecis() {
	cardParecis.style.display = 'none';
    cardParecis.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardParnaiba = document.getElementById('Card_Parnaiba')

function mapBacias_ColocaParnaiba (){
    cardParnaiba.style.height = '150px'
    cardParnaiba.style.display = 'block'
}
function mapBacias_tiraParnaiba(){
    if (interuptor1)
        cardParnaiba.style.display = 'none'
        interuptor1 = true
}
function SelecionaParnaiba() {
    if (interuptor)
        cardParnaiba.style.display = 'block'
        cardParnaiba.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeParnaiba() {
	cardParnaiba.style.display = 'none';
    cardParnaiba.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardPelotas = document.getElementById('Card_Pelotas')

function mapBacias_ColocaPelotas (){
    cardPelotas.style.height = '150px'
    cardPelotas.style.display = 'block'
}
function mapBacias_tiraPelotas(){
    if (interuptor1)
        cardPelotas.style.display = 'none'
        interuptor1 = true
}
function SelecionaPelotas() {
    if (interuptor)
        cardPelotas.style.display = 'block'
        cardPelotas.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondePelotas() {
	cardPelotas.style.display = 'none';
    cardPelotas.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardPernambucoParaiba = document.getElementById('Card_Pernambuco_Paraiba')

function mapBacias_ColocaPernambucoParaiba (){
    cardPernambucoParaiba.style.height = '150px'
    cardPernambucoParaiba.style.display = 'block'
}
function mapBacias_tiraPernambucoParaiba(){
    if (interuptor1)
        cardPernambucoParaiba.style.display = 'none'
        interuptor1 = true
}
function SelecionaParaiba() {
    if (interuptor)
        cardPernambucoParaiba.style.display = 'block'
        cardPernambucoParaiba.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondePernambuco() {
	cardPernambucoParaiba.style.display = 'none';
    cardPernambucoParaiba.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardPernambucoParaibaTerra = document.getElementById('Card_Pernambuco_Paraiba_Terra')

function mapBacias_ColocaPernambucoParaibaT (){
    cardPernambucoParaibaTerra.style.height = '150px'
    cardPernambucoParaibaTerra.style.display = 'block'
}
function mapBacias_tiraPernambucoParaibaT(){
    if (interuptor1)
        cardPernambucoParaibaTerra.style.display = 'none'
        interuptor1 = true
}
function SelecionaParaibaT() {
    if (interuptor)
        cardPernambucoParaibaTerra.style.display = 'block'
        cardPernambucoParaibaTerra.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondePernambucoT() {
	cardPernambucoParaibaTerra.style.display = 'none';
    cardPernambucoParaibaTerra.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardPotiguar = document.getElementById('Card_Potiguar')

function mapBacias_ColocaPotiguar (){
    cardPotiguar.style.height = '150px'
    cardPotiguar.style.display = 'block'
}
function mapBacias_tiraPotiguar(){
    if (interuptor1)
        cardPotiguar.style.display = 'none'
        interuptor1 = true
}
function SelecionaPotiguar() {
    if (interuptor)
        cardPotiguar.style.display = 'block'
        cardPotiguar.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondePotiguar() {
	cardPotiguar.style.display = 'none';
    cardPotiguar.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardPotiguarTerra = document.getElementById('Card_Potiguar_Terra')

function mapBacias_ColocaPotiguarT (){
    cardPotiguarTerra.style.height = '150px'
    cardPotiguarTerra.style.display = 'block'
}
function mapBacias_tiraPotiguarT(){
    if (interuptor1)
        cardPotiguarTerra.style.display = 'none'
        interuptor1 = true
}
function SelecionaPotiguarT() {
    if (interuptor)
        cardPotiguarTerra.style.display = 'block'
        cardPotiguarTerra.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondePotiguarT() {
	cardPotiguarTerra.style.display = 'none';
    cardPotiguarTerra.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardReconcavo = document.getElementById('Card_Reconcavo')

function mapBacias_ColocaReconcavo (){
    cardReconcavo.style.height = '150px'
    cardReconcavo.style.display = 'block'
}
function mapBacias_tiraReconcavo(){
    if (interuptor1)
        cardReconcavo.style.display = 'none'
        interuptor1 = true
}
function SelecionaReconcavo() {
    if (interuptor)
        cardReconcavo.style.display = 'block'
        cardReconcavo.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeReconcavo() {
	cardReconcavo.style.display = 'none';
    cardReconcavo.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardSantos = document.getElementById('Card_Santos')

function mapBacias_ColocaSantos (){
    cardSantos.style.height = '150px'
    cardSantos.style.display = 'block'
}
function mapBacias_tiraSantos(){
    if (interuptor1)
        cardSantos.style.display = 'none'
        interuptor1 = true
}
function SelecionaSantos() {
    if (interuptor)
        cardSantos.style.display = 'block'
        cardSantos.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeSantos() {
	cardSantos.style.display = 'none';
    cardSantos.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardSaoFrancisco = document.getElementById('Card_Sao_Francisco')

function mapBacias_ColocaSaoFrancisco (){
    cardSaoFrancisco.style.height = '150px'
    cardSaoFrancisco.style.display = 'block'
}
function mapBacias_tiraSaoFrancisco(){
    if (interuptor1)
        cardSaoFrancisco.style.display = 'none'
        interuptor1 = true
}
function SelecionaSaoFrancisco() {
    if (interuptor)
        cardSaoFrancisco.style.display = 'block'
        cardSaoFrancisco.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeSaoFrancisco() {
	cardSaoFrancisco.style.display = 'none';
    cardSaoFrancisco.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardSaoLuis = document.getElementById('Card_Sao_Luis')

function mapBacias_ColocaSaoLuis (){
    cardSaoLuis.style.height = '150px'
    cardSaoLuis.style.display = 'block'
}
function mapBacias_tiraSaoLuis(){
    if (interuptor1)
        cardSaoLuis.style.display = 'none'
        interuptor1 = true
}
function SelecionaSaoLuis() {
    if (interuptor)
        cardSaoLuis.style.display = 'block'
        cardSaoLuis.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeSaoLuis() {
	cardSaoLuis.style.display = 'none';
    cardSaoLuis.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardSaoLuisGrajau = document.getElementById('Card_Sao_Luis_Grajau')

function mapBacias_ColocaSaoLuisGrajau (){
    cardSaoLuisGrajau.style.height = '150px'
    cardSaoLuisGrajau.style.display = 'block'
}
function mapBacias_tiraSaoLuisGrajau(){
    if (interuptor1)
        cardSaoLuisGrajau.style.display = 'none'
        interuptor1 = true
    }
function SelecionaSaoLuisGrajau() {
    if (interuptor)
        cardSaoLuisGrajau.style.display = 'block'
        cardSaoLuisGrajau.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeSaoLuisGrajau() {
	cardSaoLuisGrajau.style.display = 'none';
    cardSaoLuisGrajau.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardSergipeAlagoas = document.getElementById('Card_Sergipe_Alagoas')

function mapBacias_ColocaSergipeAlagoas (){
    cardSergipeAlagoas.style.height = '150px'
    cardSergipeAlagoas.style.display = 'block'
}
function mapBacias_tiraSergipeAlagoas(){
    if (interuptor1)
        cardSergipeAlagoas.style.display = 'none'
        interuptor1 = true
}
function SelecionaSergipeAlagoas() {
    if (interuptor)
        cardSergipeAlagoas.style.display = 'block'
        cardSergipeAlagoas.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeSergipe() {
	cardSergipeAlagoas.style.display = 'none';
    cardSergipeAlagoas.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardSergipeAlagoasTerra = document.getElementById('Card_Sergipe_Alagoas_Terra')

function mapBacias_ColocaSergipeAlagoasT (){
    cardSergipeAlagoasTerra.style.height = '150px'
    cardSergipeAlagoasTerra.style.display = 'block'
}
function mapBacias_tiraSergipeAlagoasT(){
    if (interuptor1)
        cardSergipeAlagoasTerra.style.display = 'none'
        interuptor1 = true
}
function SelecionaSergipeAlagoasT() {
    if (interuptor)
        cardSergipeAlagoasTerra.style.display = 'block'
        cardSergipeAlagoasTerra.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeSergipeT() {
	cardSergipeAlagoasTerra.style.display = 'none';
    cardSergipeAlagoasTerra.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardSolimoes = document.getElementById('Card_Solimoes')

function mapBacias_ColocaSolimoes (){
    cardSolimoes.style.height = '150px'
    cardSolimoes.style.display = 'block'
}
function mapBacias_tiraSolimoes(){
    if (interuptor1)
        cardSolimoes.style.display = 'none'
        interuptor1 = true
}
function SelecionaSolimoes() {
    if (interuptor)
        cardSolimoes.style.display = 'block'
        cardSolimoes.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeSolimoes() {
	cardSolimoes.style.display = 'none';
    cardSolimoes.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardTacutu = document.getElementById('Card_Tacutu')

function mapBacias_ColocaTacutu (){
    cardTacutu.style.height = '150px'
    cardTacutu.style.display = 'block'
}
function mapBacias_tiraTacutu(){
    if (interuptor1)
        cardTacutu.style.display = 'none'
        interuptor1 = true
}
function SelecionaTacutu() {
    if (interuptor)
        cardTacutu.style.display = 'block'
        cardTacutu.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
        interuptor1 = false
}
function escondeTacutu() {
	cardTacutu.style.display = 'none';
    cardTacutu.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardTaubate = document.getElementById('Card_Taubate')

function mapBacias_ColocaTaubate (){
    cardTaubate.style.height = '150px'
    cardTaubate.style.display = 'block'
}
function mapBacias_tiraTaubate(){
    if (interuptor1)
        cardTaubate.style.display = 'none'
        interuptor1 = true
}
function SelecionaTaubate() {
    if (interuptor)
        cardTaubate.style.display = 'block'
        cardTaubate.style.zIndex = '1000'
        camadaInferior.style.display = 'block'
        interuptor = true
    interuptor1 = false
}
function escondeTaubate() {
	cardTaubate.style.display = 'none';
    cardTaubate.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}


var cardTucano = document.getElementById('Card_Tucano')

function mapBacias_ColocaTucano (){
    cardTucano.style.height = '150px'
    cardTucano.style.display = 'block'
}
function mapBacias_tiraTucano(){
    if (interuptor1)
        cardTucano.style.display = 'none'
        interuptor1 = true
}
function SelecionaTucano() {
    if (interuptor)
       cardTucano.style.display = 'block'
       cardAcre.style.zIndex = '1000'
       camadaInferior.style.display = 'block'
       interuptor = true
       interuptor1 = false
}
function escondeTucano() {
	cardTucano.style.display = 'none';
    cardTucano.style.zIndex = '-1'
    camadaInferior.style.display = 'none'
    interuptor = false
}