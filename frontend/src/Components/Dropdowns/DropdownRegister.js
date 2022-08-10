import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
export default function DropdownRegister () {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="signup-button"
        aria-controls={open ? 'sign-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
        size="small"
        sx={{
          ml: 1,
          '&.MuiButtonBase-root:hover': {
            bgcolor: 'white'
          },
          bgcolor: 'white',
          fontWeight: 'bold',
          borderRadius: 2
        }}
      >
        Registrarse
      </Button>
      <Menu
        id="sign-menu"
        aria-labelledby="signup-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
      </Menu>
    </div>
  )
}
