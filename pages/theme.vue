<template>
  <div>
    <div class="wrapper">
      <div class="main">
        <div class="section">
          <div class="container tim-container">
            <div class="tim-title">
              <h2>Basic Elements</h2>
            </div>

            <div id="buttons">
              <div class="tim-title">
                <h3>
                  Buttons <br />
                  <small> Pick your colour </small>
                </h3>
              </div>
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <button href="#fakelink" class="btn">Default</button>
                  <button href="#fakelink" class="btn btn-primary">
                    Primary
                  </button>
                  <button href="#fakelink" class="btn btn-info">Info</button>
                  <button href="#fakelink" class="btn btn-success">
                    Success
                  </button>
                  <button href="#fakelink" class="btn btn-warning">
                    Warning
                  </button>
                  <button href="#fakelink" class="btn btn-danger">
                    Danger
                  </button>
                  <button href="#fakelink" class="btn btn-neutral">
                    Neutral
                  </button>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <button href="#fakelink" class="btn btn-fill">Default</button>
                  <button href="#fakelink" class="btn btn-fill btn-primary">
                    Primary
                  </button>
                  <button href="#fakelink" class="btn btn-fill btn-info">
                    Info
                  </button>
                  <button href="#fakelink" class="btn btn-fill btn-success">
                    Success
                  </button>
                  <button href="#fakelink" class="btn btn-fill btn-warning">
                    Warning
                  </button>
                  <button href="#fakelink" class="btn btn-fill btn-danger">
                    Danger
                  </button>
                  <button href="#fakelink" class="btn btn-fill btn-neutral">
                    Neutral
                  </button>
                </div>
              </div>
              <div class="tim-title">
                <h3><small>Pick your size</small></h3>
              </div>
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <button href="#fakelink" class="btn btn-danger btn-xs">
                    Download
                  </button>
                  <button href="#fakelink" class="btn btn-danger btn-sm">
                    Download
                  </button>
                  <button href="#fakelink" class="btn btn-danger">
                    Download
                  </button>
                  <button href="#fakelink" class="btn btn-danger btn-lg">
                    Download
                  </button>
                </div>
              </div>
              <div class="tim-title">
                <h3>Links</h3>
              </div>
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <button href="#fakelink" class="btn btn-simple">
                    Default
                  </button>
                  <button href="#fakelink" class="btn btn-simple btn-primary">
                    Primary
                  </button>
                  <button href="#fakelink" class="btn btn-simple btn-info">
                    Info
                  </button>
                  <button href="#fakelink" class="btn btn-simple btn-success">
                    Success
                  </button>
                  <button href="#fakelink" class="btn btn-simple btn-warning">
                    Warning
                  </button>
                  <button href="#fakelink" class="btn btn-simple btn-danger">
                    Danger
                  </button>
                  <button href="#fakelink" class="btn btn-simple btn-neutral">
                    Neutral
                  </button>
                </div>
              </div>
            </div>
            <!-- end buttons div -->

            <div id="inputs">
              <div class="tim-title">
                <h3>Inputs</h3>
              </div>

              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <input
                      type="text"
                      value=""
                      placeholder="Inactive"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group has-success">
                    <input type="text" value="Success" class="form-control" />
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="form-group has-error has-feedback">
                    <input type="text" value="Error" class="form-control" />
                    <span class="fa fa-times form-control-feedback"></span>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="input-group">
                    <!-- 	   Since the css properties cannot check the previous sibling of an element and for the design consistency we recommend to use the "input-group-addon" after the "form-control" like in this example -->
                    <input
                      type="text"
                      value="Group Addon"
                      class="form-control"
                    />
                    <span class="input-group-addon"
                      ><i class="fa fa-group"></i
                    ></span>
                  </div>
                </div>
              </div>
              <!-- end row -->

              <div class="row">
                <div class="col-sm-3">
                  <div class="tim-title">
                    <h3>Checkboxes</h3>
                  </div>

                  <label class="checkbox" for="checkbox1">
                    <span class="icons"
                      ><span class="first-icon fa fa-circle-o fa-base"></span
                      ><span
                        class="second-icon fa fa-check-circle-o fa-base"
                      ></span></span
                    ><input
                      id="checkbox1"
                      type="checkbox"
                      value=""
                      data-toggle="checkbox"
                    />
                    Unchecked
                  </label>
                  <label class="checkbox checked" for="checkbox2">
                    <span class="icons"
                      ><span class="first-icon fa fa-circle-o fa-base"></span
                      ><span
                        class="second-icon fa fa-check-circle-o fa-base"
                      ></span></span
                    ><input
                      id="checkbox2"
                      type="checkbox"
                      value=""
                      data-toggle="checkbox"
                      checked=""
                    />
                    Checked
                  </label>
                  <label class="checkbox disabled" for="checkbox3">
                    <span class="icons"
                      ><span class="first-icon fa fa-circle-o fa-base"></span
                      ><span
                        class="second-icon fa fa-check-circle-o fa-base"
                      ></span></span
                    ><input
                      id="checkbox3"
                      type="checkbox"
                      value=""
                      data-toggle="checkbox"
                      disabled=""
                    />
                    Disabled unchecked
                  </label>
                  <label class="checkbox disabled checked" for="checkbox4">
                    <span class="icons"
                      ><span class="first-icon fa fa-circle-o fa-base"></span
                      ><span
                        class="second-icon fa fa-check-circle-o fa-base"
                      ></span></span
                    ><input
                      id="checkbox4"
                      type="checkbox"
                      value=""
                      data-toggle="checkbox"
                      disabled=""
                      checked=""
                    />
                    Disabled checked
                  </label>
                </div>

                <div class="col-sm-3">
                  <div class="tim-title">
                    <h3>Radio Buttons</h3>
                  </div>

                  <label class="radio">
                    <span class="icons"
                      ><span class="first-icon fa fa-circle-o fa-base"></span
                      ><span
                        class="second-icon fa fa-dot-circle-o fa-base"
                      ></span></span
                    ><input
                      id="optionsRadios1"
                      type="radio"
                      name="optionsRadios"
                      data-toggle="radio"
                      value="option1"
                    />
                    <i></i>Radio is off
                  </label>
                  <label class="radio checked">
                    <span class="icons"
                      ><span class="first-icon fa fa-circle-o fa-base"></span
                      ><span
                        class="second-icon fa fa-dot-circle-o fa-base"
                      ></span></span
                    ><input
                      id="optionsRadios2"
                      type="radio"
                      name="optionsRadios"
                      data-toggle="radio"
                      value="option1"
                      checked=""
                    />
                    <i></i>Radio is on
                  </label>

                  <label class="radio disabled">
                    <span class="icons"
                      ><span class="first-icon fa fa-circle-o fa-base"></span
                      ><span
                        class="second-icon fa fa-dot-circle-o fa-base"
                      ></span></span
                    ><input
                      id="optionsRadios3"
                      type="radio"
                      name="optionsRadiosDisabled"
                      data-toggle="radio"
                      value="option2"
                      disabled=""
                    />
                    <i></i>Disabled radio is off
                  </label>
                  <label class="radio disabled checked">
                    <span class="icons"
                      ><span class="first-icon fa fa-circle-o fa-base"></span
                      ><span
                        class="second-icon fa fa-dot-circle-o fa-base"
                      ></span></span
                    ><input
                      id="optionsRadios4"
                      type="radio"
                      name="optionsRadiosDisabled"
                      data-toggle="radio"
                      value="option2"
                      checked=""
                      disabled=""
                    />
                    <i></i>Disabled radio is on
                  </label>
                </div>
              </div>
              <!--  end row -->
            </div>
            <!--  end inputs -->
          </div>
        </div>
      </div>

      <div class="section section-light-blue">
        <div class="container">
          <div id="menu-dropdown">
            <div class="row">
              <div class="col-md-6">
                <div class="tim-title">
                  <h3>Menu</h3>
                </div>
                <br />

                <div id="navbar">
                  <nav class="navbar navbar-default">
                    <div class="container-fluid">
                      <!-- Brand and toggle get grouped for better mobile display -->
                      <div class="navbar-header">
                        <button
                          type="button"
                          class="navbar-toggle"
                          data-toggle="collapse"
                          data-target="#bs-example-navbar-collapse-1"
                        >
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Menu</a>
                      </div>

                      <!-- Collect the nav links, forms, and other content for toggling -->
                      <div
                        id="bs-example-navbar-collapse-1"
                        class="collapse navbar-collapse"
                      >
                        <ul class="nav navbar-nav">
                          <li class="active"><a href="#">Link</a></li>
                          <li><a href="#">Link</a></li>
                          <li class="dropdown">
                            <a
                              href="#"
                              class="dropdown-toggle"
                              data-toggle="dropdown"
                              >Dropdown <b class="caret"></b
                            ></a>
                            <!--                                  You can add classes for different colours on the next element -->
                            <ul class="dropdown-menu dropdown-menu-right">
                              <li class="dropdown-header">Dropdown header</li>
                              <li><a href="#">Action</a></li>
                              <li><a href="#">Another action</a></li>
                              <li><a href="#">Something else here</a></li>
                              <li class="divider"></li>
                              <li><a href="#">Separated link</a></li>
                              <li class="divider"></li>
                              <li><a href="#">One more separated link</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <!-- /.navbar-collapse -->
                    </div>
                    <!-- /.container-fluid -->
                  </nav>
                </div>
                <!--  end navbar -->
              </div>
              <div class="col-md-6"></div>
            </div>
            <!-- end row -->

            <div class="tim-title">
              <h3>Dropdown</h3>
              <br />
              <div id="navbar-dropdown">
                <nav class="navbar navbar-default">
                  <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                      <button
                        type="button"
                        class="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                      >
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">Dropdown Colors</a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div
                      id="bs-example-navbar-collapse-1"
                      class="collapse navbar-collapse"
                    >
                      <ul class="nav navbar-nav pull-right">
                        <!--                                       default dropdown -->
                        <li class="dropdown">
                          <buttonn
                            href="#"
                            class="dropdown-toggle btn"
                            data-toggle="dropdown"
                            >Default <b class="caret"></b>
                            <!--                                  You can add classes for different colours on the next element -->
                            <ul class="dropdown-menu dropdown-menu-right">
                              <li class="dropdown-header">Dropdown header</li>
                              <li><a href="#">Action</a></li>
                              <li><a href="#">Another action</a></li>
                              <li><a href="#">Something else here</a></li>
                              <li class="divider"></li>
                              <li><a href="#">Separated link</a></li>
                              <li class="divider"></li>
                              <li><a href="#">One more separated link</a></li>
                            </ul>
                          </buttonn>
                        </li>
                        <!--                                       primary dropdown -->
                        <li class="dropdown">
                          <button
                            href="#"
                            class="dropdown-toggle btn btn-primary"
                            data-toggle="dropdown"
                          >
                            Primary <b class="caret"></b>
                          </button>
                          <!--                                  You can add classes for different colours on the next element -->
                          <ul
                            class="dropdown-menu dropdown-primary dropdown-menu-right"
                          >
                            <li class="dropdown-header">Dropdown header</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                        <!--                                       info dropdown -->
                        <li class="dropdown">
                          <button
                            href="#"
                            class="dropdown-toggle btn btn-info"
                            data-toggle="dropdown"
                          >
                            Info <b class="caret"></b>
                          </button>
                          <!--                                  You can add classes for different colours on the next element -->
                          <ul
                            class="dropdown-menu dropdown-info dropdown-menu-right"
                          >
                            <li class="dropdown-header">Dropdown header</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                        <!--                                       success dropdown -->
                        <li class="dropdown">
                          <button
                            href="#"
                            class="dropdown-toggle btn btn-success"
                            data-toggle="dropdown"
                          >
                            Success <b class="caret"></b>
                          </button>
                          <!--                                  You can add classes for different colours on the next element -->
                          <ul
                            class="dropdown-menu dropdown-success dropdown-menu-right"
                          >
                            <li class="dropdown-header">Dropdown header</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                        <!--                                       warning dropdown -->
                        <li class="dropdown">
                          <button
                            href="#"
                            class="dropdown-toggle btn btn-warning"
                            data-toggle="dropdown"
                          >
                            Warning <b class="caret"></b>
                          </button>
                          <!--                                  You can add classes for different colours on the next element -->
                          <ul
                            class="dropdown-menu dropdown-warning dropdown-menu-right"
                          >
                            <li class="dropdown-header">Dropdown header</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                        <!--                                       danger dropdown -->
                        <li class="dropdown">
                          <button
                            href="#"
                            class="dropdown-toggle btn btn-danger"
                            data-toggle="dropdown"
                          >
                            Danger <b class="caret"></b>
                          </button>
                          <!--                                  You can add classes for different colours on the next element -->
                          <ul
                            class="dropdown-menu dropdown-danger dropdown-menu-right"
                          >
                            <li class="dropdown-header">Dropdown header</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                  </div>
                  <!-- /.container-fluid -->
                </nav>
              </div>
              <!--  end navbar -->
            </div>
            <br />
            <div class="tim-title">
              <h3>Navigation</h3>
            </div>
          </div>
          <!-- end menu-dropdown -->
        </div>
      </div>
    </div>
    <div id="navbar-full">
      <div id="navbar">
        <div class="navigation-example">
          <!--                 transparent navbar -->
          <nav class="navbar navbar-ct-transparent" role="navigation-demo">
            <div class="container">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Transparent</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div id="navigation-example-2" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-->
          </nav>

          <!--                  default navbar -->
          <nav class="navbar navbar-default" role="navigation-demo">
            <div class="container">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Default</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div id="navigation-example-2" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <li>
                    <a href="#" class="btn btn-simple">Link</a>
                  </li>
                  <li>
                    <a href="#" target="_blank" class="btn btn-fill">Button</a>
                  </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-->
          </nav>

          <!--                  primary navbar -->
          <nav class="navbar navbar-ct-primary" role="navigation-demo">
            <div class="container">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Primary</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div id="navigation-example-2" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <a href="#" class="btn btn-primary btn-simple">Link</a>
                  <a href="#" target="_blank" class="btn btn-primary btn-fill"
                    >Button</a
                  >
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-->
          </nav>

          <!--                     info navbar -->
          <nav class="navbar navbar-ct-info" role="navigation-demo">
            <div class="container">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Info</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div id="navigation-example-2" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <a href="#" class="btn btn-info btn-simple">Link</a>
                  <a href="#" target="_blank" class="btn btn-info btn-fill"
                    >Button</a
                  >
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-->
          </nav>

          <!--                     success navbar -->
          <nav class="navbar navbar-ct-success" role="navigation-demo">
            <div class="container">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Success</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div id="navigation-example-2" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <a href="#" class="btn btn-success btn-simple">Link</a>
                  <a href="#" target="_blank" class="btn btn-success btn-fill"
                    >Button</a
                  >
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-->
          </nav>

          <!--                     warning navbar -->
          <nav class="navbar navbar-ct-warning" role="navigation-demo">
            <div class="container">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Warning</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div id="navigation-example-2" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <a href="#" class="btn btn-warning btn-simple">Link</a>
                  <a href="#" target="_blank" class="btn btn-warning btn-fill"
                    >Button</a
                  >
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-->
          </nav>

          <!--                     danger navbar -->
          <nav class="navbar navbar-ct-danger" role="navigation-demo">
            <div class="container">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Danger</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div id="navigation-example-2" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <a href="#" class="btn btn-danger btn-simple">Link</a>
                  <a href="#" target="_blank" class="btn btn-danger btn-fill"
                    >Button</a
                  >
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-->
          </nav>
        </div>
        <!--  navigation example -->
      </div>
      <!-- end #navbar -->
    </div>
    <!-- end navbar-full -->
    <div class="wrapper">
      <div class="main">
        <div class="section section-nude">
          <div class="container tim-container">
            <div id="sliders-navigation">
              <div class="row">
                <div class="col-md-6">
                  <div class="tim-title">
                    <h3>Progress Bars</h3>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 30%;"
                    >
                      <span class="sr-only">60% Complete</span>
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-info"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 60%;"
                    >
                      <span class="sr-only">60% Complete</span>
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-success"
                      style="width: 35%;"
                    >
                      <span class="sr-only">35% Complete (success)</span>
                    </div>
                    <div
                      class="progress-bar progress-bar-warning"
                      style="width: 20%;"
                    >
                      <span class="sr-only">20% Complete (warning)</span>
                    </div>
                    <div
                      class="progress-bar progress-bar-danger"
                      style="width: 10%;"
                    >
                      <span class="sr-only">10% Complete (danger)</span>
                    </div>
                  </div>
                  <div class="tim-title">
                    <h3>Sliders</h3>
                  </div>
                  <div
                    id="slider-default"
                    class="slider-info ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                    aria-disabled="false"
                  >
                    <div
                      class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"
                      style="width: 70%;"
                    ></div>
                    <a
                      class="ui-slider-handle ui-state-default ui-corner-all"
                      href="#"
                      style="left: 70%;"
                    ></a>
                  </div>
                  <br />
                  <div
                    id="slider-range"
                    class="slider-success ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                    aria-disabled="false"
                  >
                    <div
                      class="ui-slider-range ui-widget-header ui-corner-all"
                      style="left: 15%; width: 45%;"
                    ></div>
                    <a
                      class="ui-slider-handle ui-state-default ui-corner-all"
                      href="#"
                      style="left: 15%;"
                    ></a
                    ><a
                      class="ui-slider-handle ui-state-default ui-corner-all"
                      href="#"
                      style="left: 60%;"
                    ></a>
                  </div>
                </div>
                <!-- progress bar -->

                <div class="col-md-6">
                  <div class="tim-title">
                    <h3>Navigation Menu</h3>
                  </div>
                  <!--                         We added two wrappers with the classes "nav-tabs-navigation" and "nav-tabs-wrapper" so the name of the tabs can be aligned to the center of the container they're placed in -->
                  <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                      <ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
                        <li class="active">
                          <a href="#home" data-toggle="tab">Home</a>
                        </li>
                        <li>
                          <a href="#profile" data-toggle="tab">Profile</a>
                        </li>
                        <li>
                          <a href="#messages" data-toggle="tab">Messages</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="my-tab-content" class="tab-content text-center">
                    <div id="home" class="tab-pane active">
                      <p>Here is information about home.</p>
                    </div>
                    <div id="profile" class="tab-pane">
                      <p>Here is your profile.</p>
                    </div>
                    <div id="messages" class="tab-pane">
                      <p>Here are your messages.</p>
                    </div>
                  </div>
                  <br />

                  <ul class="nav nav-pills nav-pills-danger" role="tablist">
                    <li class="active">
                      <a href="#info" role="tab" data-toggle="tab">
                        Info
                      </a>
                    </li>
                    <li>
                      <a href="#description" role="tab" data-toggle="tab">
                        Menu
                      </a>
                    </li>
                    <li>
                      <a href="#concept" role="tab" data-toggle="tab">
                        Concept
                      </a>
                    </li>
                  </ul>
                  <br />
                  <div class="tim-title">
                    <h3>Pagination</h3>
                  </div>
                  <ul class="pagination pagination-danger">
                    <!--   color-classes: "pagination-primary", "pagination-info", "pagination-success", "pagination-warning", "pagination-danger"
                         -->
                    <li><a href="javascript:void(0);">«</a></li>
                    <li><a href="javascript:void(0);">1</a></li>
                    <li><a href="javascript:void(0);">2</a></li>
                    <li class="active"><a href="javascript:void(0);">3</a></li>
                    <li><a href="javascript:void(0);">4</a></li>
                    <li><a href="javascript:void(0);">5</a></li>
                    <li><a href="javascript:void(0);">»</a></li>
                  </ul>
                </div>
                <!-- navigation menu -->
              </div>
            </div>
            <!--  end sliders-navigation -->

            <div id="labels-badges">
              <div class="row">
                <div class="col-md-6">
                  <div class="tim-title">
                    <h3>Labels</h3>
                  </div>
                  <span class="label label-default">Default</span>
                  <span class="label label-primary">Primary</span>
                  <span class="label label-info">Info</span>
                  <span class="label label-success">Success</span>
                  <span class="label label-warning">Warning</span>
                  <span class="label label-danger">Danger</span>
                </div>
                <div class="col-md-6"></div>
              </div>
              <!-- end row -->
            </div>
            <!-- end labels-badges -->
            <br />
            <div class="tim-title">
              <h3>Notifications</h3>
            </div>
          </div>
          <!-- end container -->
        </div>
      </div>
      <!-- end main -->

      <div id="notifications">
        <div class="alert alert-info">
          <div class="container">
            <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </div>
        </div>
        <div class="alert alert-success">
          <div class="container">
            <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </div>
        </div>
        <div class="alert alert-warning">
          <div class="container">
            <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </div>
        </div>
        <div class="alert alert-danger">
          <div class="container">
            <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <!--  end notifications -->

      <div class="main">
        <div class="section section-nude">
          <div class="container tim-container">
            <div class="tim-title">
              <h2>Typography</h2>
            </div>
            <div id="typography">
              <div class="row">
                <div class="tim-typo">
                  <h1>
                    <span class="tim-note">Header 1</span>Thinking in textures
                  </h1>
                </div>
                <div class="tim-typo">
                  <h2>
                    <span class="tim-note">Header 2</span>Thinking in textures
                  </h2>
                </div>
                <div class="tim-typo">
                  <h3>
                    <span class="tim-note">Header 3</span>Thinking in textures
                  </h3>
                </div>
                <div class="tim-typo">
                  <h4>
                    <span class="tim-note">Header 4</span>Thinking in textures
                  </h4>
                </div>
                <div class="tim-typo">
                  <h5>
                    <span class="tim-note">Header 5</span>Thinking in textures
                  </h5>
                </div>
                <div class="tim-typo">
                  <h6>
                    <span class="tim-note">Header 6</span>Thinking in textures
                  </h6>
                </div>
                <div class="tim-typo">
                  <p>
                    <span class="tim-note">Paragraph</span> Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam.
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Quote</span>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <small>
                      Steve Jobs, CEO Apple
                    </small>
                  </blockquote>
                </div>

                <div class="tim-typo">
                  <span class="tim-note">Muted Text</span>
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Primary Text</span>
                  <p class="text-primary">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Info Text</span>
                  <p class="text-info">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Success Text</span>
                  <p class="text-success">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Warning Text</span>
                  <p class="text-warning">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Danger Text</span>
                  <p class="text-danger">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt...
                  </p>
                </div>
                <div class="tim-typo">
                  <h2>
                    <span class="tim-note">Small Tag</span>Header with small
                    subtitle <br /><small
                      >".small" is a tag for the headers</small
                    >
                  </h2>
                </div>
              </div>
            </div>
            <!--   end typography -->
            <div class="space"></div>
            <div id="images">
              <div class="tim-title">
                <h2>Images</h2>
              </div>
              <br />
              <div class="row">
                <div class="col-xs-8 col-sm-6 col-md-3">
                  <h4>Rounded Image</h4>
                  <img
                    src="/paper_img/thinking_in_textures.png"
                    alt="Rounded Image"
                    class="img-rounded img-responsive"
                  />
                  <div class="img-details">
                    <div class="author">
                      <img
                        src="/paper_img/chet_faker_1.jpg"
                        alt="Circle Image"
                        class="img-circle img-no-padding img-responsive"
                      />
                    </div>
                    <p>Chet Faker</p>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-3 col-md-2 col-md-offset-1">
                  <h4>Circle Image</h4>
                  <br />
                  <img
                    src="/paper_img/placeholder.jpg"
                    alt="Circle Image"
                    class="img-circle img-no-padding img-responsive"
                  />
                  <p class="text-center">Placeholder</p>
                </div>
                <div class="col-xs-6 col-sm-3 col-md-2 col-md-offset-1">
                  <h4>Thumbnail</h4>
                  <br />
                  <img
                    src="/paper_img/chet_faker_2.jpg"
                    alt="Thumbnail Image"
                    class="img-thumbnail img-responsive"
                  />
                  <p class="text-center">Chet Faker</p>
                </div>
              </div>
              <div class="row"></div>
            </div>
            <!--   end images -->
          </div>
          <!-- end container -->
        </div>
      </div>
      <!-- end main -->

      <div id="carousel">
        <div
          id="carousel-example-generic"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
                class=""
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
                class=""
              ></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
              <div class="item next left">
                <img src="/paper_img/pencils.jpg" alt="Awesome Image" />
              </div>
              <div class="item">
                <img src="/paper_img/shoes.jpg" alt="Awesome Image" />
              </div>
              <div class="item active left">
                <img src="/paper_img/types.jpg" alt="Awesome Image" />
              </div>
            </div>

            <!-- Controls -->
            <a
              class="left carousel-control"
              href="#carousel-example-generic"
              data-slide="prev"
            >
              <span class="fa fa-angle-left"></span>
            </a>
            <a
              class="right carousel-control"
              href="#carousel-example-generic"
              data-slide="next"
            >
              <span class="fa fa-angle-right"></span>
            </a>
          </div>
        </div>
        <!-- end carousel -->
      </div>
      <!-- end wrapper -->

      <!-- </div> -->
    </div>
    <!-- Modal -->
    <div
      id="myModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
            <h4 id="myModalLabel" class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>
          </div>
          <div class="modal-footer">
            <div class="left-side">
              <button
                type="button"
                class="btn btn-default btn-simple"
                data-dismiss="modal"
              >
                Never mind
              </button>
            </div>
            <div class="divider"></div>
            <div class="right-side">
              <button type="button" class="btn btn-danger btn-simple">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    end modal -->

    <div class="datepicker dropdown-menu">
      <div class="datepicker-days" style="display: block;">
        <table class="table-condensed">
          <thead>
            <tr>
              <th class="prev"><p>‹</p></th>
              <th colspan="5" class="switch-datepicker">AUG. 2020</th>
              <th class="next"><p>›</p></th>
            </tr>
            <tr>
              <th class="dow">M</th>
              <th class="dow">T</th>
              <th class="dow">W</th>
              <th class="dow">T</th>
              <th class="dow">F</th>
              <th class="dow">S</th>
              <th class="dow">S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="day old"><p>27</p></td>
              <td class="day old"><p>28</p></td>
              <td class="day old"><p>29</p></td>
              <td class="day old"><p>30</p></td>
              <td class="day old"><p>31</p></td>
              <td class="day"><p>1</p></td>
              <td class="day"><p>2</p></td>
            </tr>
            <tr>
              <td class="day"><p>3</p></td>
              <td class="day"><p>4</p></td>
              <td class="day"><p>5</p></td>
              <td class="day"><p>6</p></td>
              <td class="day"><p>7</p></td>
              <td class="day"><p>8</p></td>
              <td class="day active {color}"><p>9</p></td>
            </tr>
            <tr>
              <td class="day"><p>10</p></td>
              <td class="day"><p>11</p></td>
              <td class="day"><p>12</p></td>
              <td class="day"><p>13</p></td>
              <td class="day"><p>14</p></td>
              <td class="day"><p>15</p></td>
              <td class="day"><p>16</p></td>
            </tr>
            <tr>
              <td class="day"><p>17</p></td>
              <td class="day"><p>18</p></td>
              <td class="day"><p>19</p></td>
              <td class="day"><p>20</p></td>
              <td class="day"><p>21</p></td>
              <td class="day"><p>22</p></td>
              <td class="day"><p>23</p></td>
            </tr>
            <tr>
              <td class="day"><p>24</p></td>
              <td class="day"><p>25</p></td>
              <td class="day"><p>26</p></td>
              <td class="day"><p>27</p></td>
              <td class="day"><p>28</p></td>
              <td class="day"><p>29</p></td>
              <td class="day"><p>30</p></td>
            </tr>
            <tr>
              <td class="day"><p>31</p></td>
              <td class="day new"><p>1</p></td>
              <td class="day new"><p>2</p></td>
              <td class="day new"><p>3</p></td>
              <td class="day new"><p>4</p></td>
              <td class="day new"><p>5</p></td>
              <td class="day new"><p>6</p></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="datepicker-months" style="display: none;">
        <table class="table-condensed">
          <thead>
            <tr>
              <th class="prev"><p>‹</p></th>
              <th colspan="5" class="switch-datepicker">2020</th>
              <th class="next"><p>›</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="7">
                <span class="month">Jan</span><span class="month">Feb</span
                ><span class="month">Mar</span><span class="month">Apr</span
                ><span class="month">May</span><span class="month">Jun</span
                ><span class="month">Jul</span
                ><span class="month active {color}">Aug</span
                ><span class="month">Sep</span><span class="month">Oct</span
                ><span class="month">Nov</span><span class="month">Dec</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="datepicker-years" style="display: none;">
        <table class="table-condensed">
          <thead>
            <tr>
              <th class="prev"><p>‹</p></th>
              <th colspan="5" class="switch-datepicker">2020-2029</th>
              <th class="next"><p>›</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="7">
                <span class="year old{color}">2019</span
                ><span class="year active {color}">2020</span
                ><span class="year{color}">2021</span
                ><span class="year{color}">2022</span
                ><span class="year{color}">2023</span
                ><span class="year{color}">2024</span
                ><span class="year{color}">2025</span
                ><span class="year{color}">2026</span
                ><span class="year{color}">2027</span
                ><span class="year{color}">2028</span
                ><span class="year{color}">2029</span
                ><span class="year old{color}">2030</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="popover-filter"></div>
  </div>
</template>

<script>
// import Button from '~/components/arcade/Button'

export default {
  layout: 'default',
  components: {
    // Button
  }
}
</script>
