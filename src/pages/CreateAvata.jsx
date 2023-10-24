import React,{useState , useEffect , useRef , createRef } from 'react'
import '../styles/create-avata.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cropper from "react-cropper";
import "../styles/fix-size.css"
import "../../node_modules/cropperjs/dist/cropper.css"
import { useParams } from 'react-router-dom';
const CreateAvata = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [data , setData] = useState('./child.jpg');
    const {id} = useParams();
    const navigate = useNavigate();
    console.log("id" + id);
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])



   
    const canvasRef = useRef(null);
      useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let base_image = new Image();
          base_image.src = preview ;
          base_image.className = "img-avata";
          base_image.id = "input_img";
          base_image.onload = ()=>{
            let wrh = base_image.width / base_image.height;
            let newWidth = canvas.width;
            let newHeight = newWidth / wrh;
            if (newHeight > canvas.height) {
                        newHeight = canvas.height;
                newWidth = newHeight * wrh;
            }
            
            let xOffset = newWidth < canvas.width ? ((canvas.width - newWidth) / 2) : 0;
            let yOffset = newHeight < canvas.height ? ((canvas.height - newHeight) / 2) : 0;
            
          ctx.drawImage(base_image, xOffset , yOffset  , newWidth , newHeight);
          setData(canvas.toDataURL('image/png'))
          }
      }, [preview]);
      
    const onSelectFileFinal = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
      }

      const onSelectFileFrame = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
      }
      const [cropData, setCropData] = useState();
      const cropperRef = createRef();
      const onCrop = async() => {
             setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL("image/png"));
      };
      const saveCrop = async(e)=>{
          const a = document.createElement('a');
          a.href = cropData;
          a.download = 'dowload.png';
          a.click();
      }

      useEffect(()=>{
        const url = `http://localhost:4000/api/v1/frame/upload/${id}`
        id ? axios.get(url).then(res => setData(`http://localhost:4000/${res.data.data.image}`)) : navigate('/create-avata')
      }) 
      // gửi data canvas lên url
  return (
    <div className='container__avata'>
      <div className='img-container'  >
        <Cropper 
            ref={cropperRef}
            src={data}
            style={{ height: "100%" ,width: "100%" , maxWidth: '100%' }}
            aspectRatio={1}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} 
            guides={true}
            zoomable={false}
            crop={onCrop}
            className='cropper'
        />
        <div className="box" style={{ width: "50%", float: "right" }}>
          <h1>Preview</h1>
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "35rem" ,border:"1px solid var(--primary-color)" }}
          />
    </div>
      </div> 
        <div className='img__box' hidden>
              <canvas id='canvas' ref={canvasRef} width={500} height={500}></canvas>
        </div>
       <div className='container__input'>
            <label>Chọn avata</label>
            <input 
              type='file' 
              name='photo' 
              id='upload-photo' 
              accept='image/*' 
              onChange={onSelectFileFinal}/> 
              
            <label>Chọn farme</label>
            <input 
              type='file' 
              placeholder='Chọn farme' 
              name='farme' 
              id='upload-farme' 
              accept='image/*'
              onChange={onSelectFileFrame}
              />
            <button type='submit' className='btn-success' onClick={saveCrop}>Save</button>
       </div>
    </div>

  )
}

export default CreateAvata