/**
 *  This module assigns displayName to react-bootstrap components so that the
 *  name is shown up in React devTool. Not all components have `displayName`
 *  defined, so this will set one for (hopefully) all of them.
 */
import * as ReactRedux from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';

const setDisplayName = (reactPackage, packageName, componentName) => {
    reactPackage[componentName].displayName = reactPackage[componentName].displayName || `${packageName}.${componentName}`;
};

export default () => {
    [
        'Provider'
    ].forEach((componentName) => setDisplayName(ReactRedux, 'ReactRedux', componentName));

    [
        'Accordion',
        'Alert',
        'Badge',
        'Breadcrumb',
        'BreadcrumbItem',
        'Button',
        'ButtonGroup',
        'ButtonToolbar',
        'Carousel',
        'CarouselItem',
        'Checkbox',
        'Clearfix',
        'CloseButton',
        'Col',
        'Collapse',
        'ControlLabel',
        'Dropdown',
        'DropdownButton',
        'Fade',
        'Form',
        'FormControl',
        'FormGroup',
        'Glyphicon',
        'Grid',
        'HelpBlock',
        'Image',
        'InputGroup',
        'Jumbotron',
        'Label',
        'ListGroup',
        'ListGroupItem',
        'Media',
        'MenuItem',
        'Modal',
        'ModalBody',
        'ModalDialog',
        'ModalFooter',
        'ModalHeader',
        'ModalTitle',
        'Nav',
        'NavDropdown',
        'NavItem',
        'Navbar',
        'NavbarBrand',
        'Overlay',
        'OverlayTrigger',
        'PageHeader',
        'PageItem',
        'Pager',
        'Pagination',
        'Panel',
        'PanelGroup',
        'Popover',
        'ProgressBar',
        'Radio',
        'ResponsiveEmbed',
        'Row',
        'SafeAnchor',
        'SplitButton',
        'Tab',
        'TabContainer',
        'TabContent',
        'TabPane',
        'Table',
        'Tabs',
        'Thumbnail',
        'ToggleButton',
        'ToggleButtonGroup',
        'Tooltip',
        'Well'
    ].forEach((componentName) => setDisplayName(ReactBootstrap, 'ReactBootstrap', componentName));

    ReactBootstrap.Breadcrumb.Item.displayName = 'ReactBootstrap.Breadcrumb.Item';

    ReactBootstrap.Carousel.Caption.displayName = 'ReactBootstrap.Carousel.Caption';
    ReactBootstrap.Carousel.Item.displayName = 'ReactBootstrap.Carousel.Item';

    ReactBootstrap.Dropdown.ControlledComponent.displayName = 'ReactBootstrap.Dropdown.ControlledComponent';
    ReactBootstrap.Dropdown.Menu.displayName = 'ReactBootstrap.Dropdown.Menu';
    ReactBootstrap.Dropdown.Toggle.displayName = 'ReactBootstrap.Dropdown.Toggle';

    ReactBootstrap.FormControl.Feedback.displayName = 'ReactBootstrap.FormControl.Feedback';
    ReactBootstrap.FormControl.Static.displayName = 'ReactBootstrap.FormControl.Static';

    ReactBootstrap.InputGroup.Addon.displayName = 'ReactBootstrap.InputGroup.Addon';
    ReactBootstrap.InputGroup.Button.displayName = 'ReactBootstrap.InputGroup.Button';

    ReactBootstrap.Media.Body.displayName = 'ReactBootstrap.Media.Body';
    ReactBootstrap.Media.Heading.displayName = 'ReactBootstrap.Media.Heading';
    ReactBootstrap.Media.Left.displayName = 'ReactBootstrap.Media.Left';
    ReactBootstrap.Media.List.displayName = 'ReactBootstrap.Media.List';
    ReactBootstrap.Media.ListItem.displayName = 'ReactBootstrap.Media.ListItem';
    ReactBootstrap.Media.Right.displayName = 'ReactBootstrap.Media.Right';

    ReactBootstrap.Modal.Body.displayName = 'ReactBootstrap.Modal.Body';
    ReactBootstrap.Modal.Dialog.displayName = 'ReactBootstrap.Modal.Dialog';
    ReactBootstrap.Modal.Footer.displayName = 'ReactBootstrap.Modal.Footer';
    ReactBootstrap.Modal.Header.displayName = 'ReactBootstrap.Modal.Header';
    ReactBootstrap.Modal.Title.displayName = 'ReactBootstrap.Modal.Title';

    ReactBootstrap.Navbar.Brand.displayName = 'ReactBootstrap.Navbar.Brand';
    ReactBootstrap.Navbar.Collapse.displayName = 'ReactBootstrap.Navbar.Collapse';
    ReactBootstrap.Navbar.ControlledComponent.displayName = 'ReactBootstrap.Navbar.ControlledComponent';
    ReactBootstrap.Navbar.Form.displayName = 'ReactBootstrap.Navbar.Form';
    ReactBootstrap.Navbar.Header.displayName = 'ReactBootstrap.Navbar.Header';
    ReactBootstrap.Navbar.Link.displayName = 'ReactBootstrap.Navbar.Link';
    ReactBootstrap.Navbar.Text.displayName = 'ReactBootstrap.Navbar.Text';
    ReactBootstrap.Navbar.Toggle.displayName = 'ReactBootstrap.Navbar.Toggle';

    ReactBootstrap.Pager.Item.displayName = 'ReactBootstrap.Pager.Item';

    ReactBootstrap.Pagination.Ellipsis.displayName = 'ReactBootstrap.Pagination.Ellipsis';
    ReactBootstrap.Pagination.First.displayName = 'ReactBootstrap.Pagination.First';
    ReactBootstrap.Pagination.Item.displayName = 'ReactBootstrap.Pagination.Item';
    ReactBootstrap.Pagination.Last.displayName = 'ReactBootstrap.Pagination.Last';
    ReactBootstrap.Pagination.Next.displayName = 'ReactBootstrap.Pagination.Next';
    ReactBootstrap.Pagination.Prev.displayName = 'ReactBootstrap.Pagination.Prev';

    ReactBootstrap.Panel.Body.displayName = 'ReactBootstrap.Panel.Body';
    ReactBootstrap.Panel.Collapse.displayName = 'ReactBootstrap.Panel.Collapse';
    ReactBootstrap.Panel.ControlledComponent.displayName = 'ReactBootstrap.Panel.ControlledComponent';
    ReactBootstrap.Panel.Footer.displayName = 'ReactBootstrap.Panel.Footer';
    ReactBootstrap.Panel.Heading.displayName = 'ReactBootstrap.Panel.Heading';
    ReactBootstrap.Panel.Title.displayName = 'ReactBootstrap.Panel.Title';
    ReactBootstrap.Panel.Toggle.displayName = 'ReactBootstrap.Panel.Toggle';

    ReactBootstrap.PanelGroup.ControlledComponent.displayName = 'ReactBootstrap.PanelGroup.ControlledComponent';

    ReactBootstrap.SplitButton.Toggle.displayName = 'ReactBootstrap.SplitButton.Toggle';

    ReactBootstrap.Tab.Container.displayName = 'ReactBootstrap.Tab.Container';
    ReactBootstrap.TabContainer.ControlledComponent.displayName = 'ReactBootstrap.TabContainer.ControlledComponent';
    ReactBootstrap.Tab.Container.ControlledComponent.displayName = 'ReactBootstrap.Tab.Container.ControlledComponent';
    ReactBootstrap.Tab.Content.displayName = 'ReactBootstrap.Tab.Content';
    ReactBootstrap.Tab.Pane.displayName = 'ReactBootstrap.Tab.Pane';

    ReactBootstrap.Tabs.ControlledComponent.displayName = 'ReactBootstrap.Tabs.ControlledComponent';

    ReactBootstrap.ToggleButtonGroup.Button.displayName = 'ReactBootstrap.ToggleButtonGroup.Button';
    ReactBootstrap.ToggleButtonGroup.ControlledComponent.displayName = 'ReactBootstrap.ToggleButtonGroup.ControlledComponent';

};
