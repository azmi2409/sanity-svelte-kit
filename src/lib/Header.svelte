<script context="module">
  import {page} from '$app/stores';
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'sveltestrap';
</script>

<script>
  let isOpen = false;

function handleUpdate(event) {
  isOpen = event.detail.isOpen;
}
  export let blogTitle = "Azmi's Site";

  let path
  $: ({path} = $page.url.pathname)
</script>
<header class="container bg-light">
  <Navbar color="light" light expand="md">
    <NavbarBrand class="px-5 ms-auto" data-selected={path === '/'} href="/">{blogTitle}</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto px-5" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Portofolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Contact Me</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</header>
