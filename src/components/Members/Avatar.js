import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Avatar = (props) => {
  return (
    <>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Senior Coordinator</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      <h1>{props.name}</h1>
         <h2>{props.motto}</h2>
         
         <a href={props.url} target="_blank"><LinkedInIcon /></a>
      </div>
      <div class="modal-footer">
    
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Avatar
